"use client";
import React from "react";
import { Provider } from "react-redux";
import Board from "./components/Board";
import Menu from "./components/Menu";
import Toolbox from "./components/Toolbox";
import { store } from "./store";

export default function Home() {
  return (
    <Provider store={store}>
      <Menu />
      <Toolbox />
      <Board />
    </Provider>
  );
}
