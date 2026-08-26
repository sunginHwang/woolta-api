/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { todoCategoryList as Query_todoCategoryList } from './../schema/todo/resolvers/Query/todoCategoryList';
import    { todoList as Query_todoList } from './../schema/todo/resolvers/Query/todoList';
import    { completeTodo as Mutation_completeTodo } from './../schema/todo/resolvers/Mutation/completeTodo';
import    { createTodo as Mutation_createTodo } from './../schema/todo/resolvers/Mutation/createTodo';
import    { createTodoCategory as Mutation_createTodoCategory } from './../schema/todo/resolvers/Mutation/createTodoCategory';
import    { deleteTodo as Mutation_deleteTodo } from './../schema/todo/resolvers/Mutation/deleteTodo';
import    { deleteTodoCategory as Mutation_deleteTodoCategory } from './../schema/todo/resolvers/Mutation/deleteTodoCategory';
import    { emptyTrash as Mutation_emptyTrash } from './../schema/todo/resolvers/Mutation/emptyTrash';
import    { importTodoList as Mutation_importTodoList } from './../schema/todo/resolvers/Mutation/importTodoList';
import    { restoreTodo as Mutation_restoreTodo } from './../schema/todo/resolvers/Mutation/restoreTodo';
import    { trashTodo as Mutation_trashTodo } from './../schema/todo/resolvers/Mutation/trashTodo';
import    { updateTodo as Mutation_updateTodo } from './../schema/todo/resolvers/Mutation/updateTodo';
import    { updateTodoCategory as Mutation_updateTodoCategory } from './../schema/todo/resolvers/Mutation/updateTodoCategory';
import    { IdMapping } from './../schema/todo/resolvers/IdMapping';
import    { Todo } from './../schema/todo/resolvers/Todo';
import    { TodoCategory } from './../schema/todo/resolvers/TodoCategory';
import    { TodoCategoryList } from './../schema/todo/resolvers/TodoCategoryList';
import    { TodoImportResult } from './../schema/todo/resolvers/TodoImportResult';
import    { TodoList } from './../schema/todo/resolvers/TodoList';
import    { DateTimeResolver } from 'graphql-scalars';
    export const resolvers: Resolvers = {
      Query: { todoCategoryList: Query_todoCategoryList,todoList: Query_todoList },
      Mutation: { completeTodo: Mutation_completeTodo,createTodo: Mutation_createTodo,createTodoCategory: Mutation_createTodoCategory,deleteTodo: Mutation_deleteTodo,deleteTodoCategory: Mutation_deleteTodoCategory,emptyTrash: Mutation_emptyTrash,importTodoList: Mutation_importTodoList,restoreTodo: Mutation_restoreTodo,trashTodo: Mutation_trashTodo,updateTodo: Mutation_updateTodo,updateTodoCategory: Mutation_updateTodoCategory },
      
      IdMapping: IdMapping,
Todo: Todo,
TodoCategory: TodoCategory,
TodoCategoryList: TodoCategoryList,
TodoImportResult: TodoImportResult,
TodoList: TodoList,
DateTime: DateTimeResolver
    }