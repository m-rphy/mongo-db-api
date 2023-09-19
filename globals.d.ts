// to make the file a module and avoid the TypeScript error
export {};

interface Todos {
    name: string,
    isDone: boolean,
}

interface Locals {
    todos: Array<Todos>    
}

declare global {
  namespace Express {
    export interface Response {
      locals: Locals
    }
  }
}
