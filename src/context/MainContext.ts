import { createContext } from "react";

const initialState = {};
export const MainContext = createContext(initialState);
const { Provider: MainContextProvider, Consumer: MainContextConsumer } =
  MainContext;
export { MainContextProvider, MainContextConsumer };
