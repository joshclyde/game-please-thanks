/*
  cool way to do a string literal
  https://github.com/microsoft/TypeScript/issues/42644#issuecomment-774315112
*/
export type StringLiteral<T> = T extends string ? (string extends T ? never : T) : never;
