"use client";

import { useState } from "react";
import { Provider } from "react-redux";
import { makeStore } from "../redux/store";
import ThemeInitializer from "./ThemeInitializer";

export default function StoreProvider({ children }) {
  const [store] = useState(makeStore);

  return (
    <Provider store={store}>
      <ThemeInitializer />
      {children}
    </Provider>
  );
}