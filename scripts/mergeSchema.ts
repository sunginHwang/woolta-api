/**
 * 여섯 도메인의 generates/schema.generated.graphqls를 하나의 SDL로 병합한다.
 * FE codegen 전용 산출물이며 런타임에는 사용되지 않는다.
 *
 * 병합 규칙:
 * - Query/Mutation 필드는 전 도메인을 합친다. 같은 필드명이 두 도메인에 있으면 에러.
 * - scalar는 이름 기준으로 중복 제거한다.
 * - 그 외 타입(type/input/enum/interface/union)은 이름이 두 도메인에서 정의되면 에러.
 *
 * 실행: npm run mergeSchema  →  schema.generated.graphqls (repo 루트)
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  Kind,
  parse,
  print,
  buildASTSchema,
  assertValidSchema,
  type DefinitionNode,
  type FieldDefinitionNode,
  type ObjectTypeDefinitionNode,
  type ObjectTypeExtensionNode,
} from 'graphql';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DOMAINS = ['blog', 'woolBank', 'user', 'todo', 'memo', 'article'] as const;
const OUTPUT = join(ROOT, 'schema.generated.graphqls');

type RootName = 'Query' | 'Mutation';

const rootFields: Record<RootName, { field: FieldDefinitionNode; domain: string }[]> = {
  Query: [],
  Mutation: [],
};
const scalars = new Map<string, DefinitionNode>();
const namedTypes = new Map<string, { def: DefinitionNode; domain: string }>();
const errors: string[] = [];

const isRootType = (
  def: DefinitionNode,
): def is ObjectTypeDefinitionNode | ObjectTypeExtensionNode =>
  (def.kind === Kind.OBJECT_TYPE_DEFINITION || def.kind === Kind.OBJECT_TYPE_EXTENSION) &&
  (def.name.value === 'Query' || def.name.value === 'Mutation');

for (const domain of DOMAINS) {
  const sdlPath = join(ROOT, 'src', 'apps', domain, 'generates', 'schema.generated.graphqls');
  const doc = parse(readFileSync(sdlPath, 'utf8'));

  for (const def of doc.definitions) {
    if (isRootType(def)) {
      const rootName = def.name.value as RootName;
      for (const field of def.fields ?? []) {
        const dup = rootFields[rootName].find((f) => f.field.name.value === field.name.value);
        if (dup) {
          errors.push(
            `${rootName}.${field.name.value} 충돌: ${dup.domain} ↔ ${domain}`,
          );
          continue;
        }
        rootFields[rootName].push({ field, domain });
      }
      continue;
    }

    if (def.kind === Kind.SCALAR_TYPE_DEFINITION) {
      scalars.set(def.name.value, def);
      continue;
    }

    if ('name' in def && def.name) {
      const name = def.name.value;
      const existing = namedTypes.get(name);
      if (existing) {
        errors.push(`타입 ${name} 충돌: ${existing.domain} ↔ ${domain}`);
        continue;
      }
      namedTypes.set(name, { def, domain });
    }
  }
}

if (errors.length > 0) {
  console.error('스키마 병합 실패 — 도메인 간 이름 충돌:\n' + errors.map((e) => `  - ${e}`).join('\n'));
  process.exit(1);
}

const buildRootType = (name: RootName): ObjectTypeDefinitionNode | null => {
  const fields = rootFields[name];
  if (fields.length === 0) return null;
  return {
    kind: Kind.OBJECT_TYPE_DEFINITION,
    name: { kind: Kind.NAME, value: name },
    fields: [...fields]
      .sort((a, b) => a.field.name.value.localeCompare(b.field.name.value))
      .map((f) => f.field),
  };
};

const definitions: DefinitionNode[] = [
  ...[...scalars.keys()].sort().map((k) => scalars.get(k)!),
  ...(['Query', 'Mutation'] as const).map(buildRootType).filter((d): d is ObjectTypeDefinitionNode => d !== null),
  ...[...namedTypes.keys()].sort().map((k) => namedTypes.get(k)!.def),
];

const merged = { kind: Kind.DOCUMENT, definitions } as const;
assertValidSchema(buildASTSchema(merged));

const header =
  '# 전 도메인 통합 GraphQL 스키마 — FE codegen 용.\n' +
  '# scripts/mergeSchema.ts 가 생성. 직접 수정 금지 (npm run mergeSchema 로 재생성).\n\n';
writeFileSync(OUTPUT, header + print(merged) + '\n');

console.log(
  `병합 완료: ${OUTPUT}\n` +
    `  Query ${rootFields.Query.length}개 / Mutation ${rootFields.Mutation.length}개 필드, ` +
    `타입 ${namedTypes.size}개, scalar ${scalars.size}개`,
);
