import { createContext, useContext } from "react";

const initialState = {};
export const StateContext = createContext(initialState);
const { Provider: StateContextProvider, Consumer: StateContextConsumer } =
  StateContext;
export { StateContextProvider, StateContextConsumer };

export function useGlobalState<TState extends {}>() {
  const context = useContext<TState>(
    StateContext as unknown as React.Context<TState>
  );
  if (!context) {
    throw new Error("useGlobalState must be used under StateContextProvider");
  }
  return context;
}
