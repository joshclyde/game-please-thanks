export type DesignFormState = Record<
  string,
  // TODO: make this a lot better. maybe put form inside a util instead of being its own reducer?
  Record<string, string | number | boolean | Date>
>;
