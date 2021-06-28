import { observer } from "mobx-react-lite";
import React from "react";
import { useStores } from "../../hooks/use-stores";
import { useHistory } from "react-router-dom";
import { Button } from "antd";

export const _About = () => {
  const stores = useStores();
  const counter = stores.counter;
  const navigate = useHistory().push;
  return (
    <div className="App" style={{ textAlign: "center", padding: "3rem" }}>
      <h1>Página about</h1>
      <h1>Counter: {counter.counter}</h1>
      <Button
        onClick={() => {
          navigate("/");
        }}
      >
        Voltar
      </Button>
    </div>
  );
};

export const About = observer(_About);
