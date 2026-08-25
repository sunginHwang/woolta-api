/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { todoCategories as Query_todoCategories } from './../schema/todo/resolvers/Query/todoCategories';
import    { todos as Query_todos } from './../schema/todo/resolvers/Query/todos';
import    { completeTodo as Mutation_completeTodo } from './../schema/todo/resolvers/Mutation/completeTodo';
import    { createTodo as Mutation_createTodo } from './../schema/todo/resolvers/Mutation/createTodo';
import    { createTodoCategory as Mutation_createTodoCategory } from './../schema/todo/resolvers/Mutation/createTodoCategory';
import    { deleteTodo as Mutation_deleteTodo } from './../schema/todo/resolvers/Mutation/deleteTodo';
import    { deleteTodoCategory as Mutation_deleteTodoCategory } from './../schema/todo/resolvers/Mutation/deleteTodoCategory';
import    { emptyTrash as Mutation_emptyTrash } from './../schema/todo/resolvers/Mutation/emptyTrash';
import    { importTodos as Mutation_importTodos } from './../schema/todo/resolvers/Mutation/importTodos';
import    { restoreTodo as Mutation_restoreTodo } from './../schema/todo/resolvers/Mutation/restoreTodo';
import    { trashTodo as Mutation_trashTodo } from './../schema/todo/resolvers/Mutation/trashTodo';
import    { updateTodo as Mutation_updateTodo } from './../schema/todo/resolvers/Mutation/updateTodo';
import    { updateTodoCategory as Mutation_updateTodoCategory } from './../schema/todo/resolvers/Mutation/updateTodoCategory';
import    { IdMapping } from './../schema/todo/resolvers/IdMapping';
import    { Todo } from './../schema/todo/resolvers/Todo';
import    { TodoCategory } from './../schema/todo/resolvers/TodoCategory';
import    { TodoImportResult } from './../schema/todo/resolvers/TodoImportResult';
import    { DateTimeResolver } from 'graphql-scalars';
    export const resolvers: Resolvers = {
      Query: { todoCategories: Query_todoCategories,todos: Query_todos },
      Mutation: { completeTodo: Mutation_completeTodo,createTodo: Mutation_createTodo,createTodoCategory: Mutation_createTodoCategory,deleteTodo: Mutation_deleteTodo,deleteTodoCategory: Mutation_deleteTodoCategory,emptyTrash: Mutation_emptyTrash,importTodos: Mutation_importTodos,restoreTodo: Mutation_restoreTodo,trashTodo: Mutation_trashTodo,updateTodo: Mutation_updateTodo,updateTodoCategory: Mutation_updateTodoCategory },
      
      IdMapping: IdMapping,
Todo: Todo,
TodoCategory: TodoCategory,
TodoImportResult: TodoImportResult,
DateTime: DateTimeResolver
    }