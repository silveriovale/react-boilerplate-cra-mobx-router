import { CounterStore } from "./store";
import { createContext } from "react";

export const stores = {
  counter: new CounterStore(),
};

export const storesContext = createContext(stores);
