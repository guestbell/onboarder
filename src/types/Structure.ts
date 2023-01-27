export type NextStepFunc<TState extends {}, TKey> = (
  state: TState
) => { [key in keyof Exclude<TState, TKey>]?: number | null };

export type Structure<TState extends {}> = {
  [key in keyof TState]?: NextStepFunc<TState, key>;
};
