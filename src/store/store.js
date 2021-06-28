import { makeAutoObservable } from "mobx";

export class CounterStore {
  counter = 0;

  constructor() {
    makeAutoObservable(this);
  }

  setCounter = () => {
    this.counter = this.counter + 1;
  };
}
