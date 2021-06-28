import { Button } from "antd";
import { observer } from "mobx-react-lite";
import React from "react";
import { useStores } from "./hooks/use-stores";
import { useHistory } from "react-router-dom";

const _App = () => {
  const stores = useStores();
  const counter = stores.counter;
  const navigate = useHistory().push;
  return (
    <div className="App" style={{ textAlign: "center", padding: "3rem" }}>
      <header className="App-header">
        <h1>Site de testes do Silvério e Raphael</h1>
        <Button
          type="primary"
          danger
          onClick={() => {
            counter.setCounter(counter.counter + 1);
          }}
        >
          Clique
        </Button>
        <h1>Contador: {counter.counter}</h1>
        <Button
          type="primary"
          danger
          onClick={() => {
            navigate("/about");
          }}
        >
          Ir para About
        </Button>
      </header>
    </div>
  );
};

export const App = observer(_App);
