import React from "react";
import ReactDOM from "react-dom";
import { createStore, bindActionCreators } from "redux";

import Counter from "./counter";

import reducer from "./reducer";
import { inc, dec, rnd } from "./actions";

const store = createStore(reducer);
const { dispatch } = store;

const { incDispatch, decDispatch, rndDispatch } = bindActionCreators({
  incDispatch: inc,
  decDispatch: dec,
  rndDispatch: rnd,
}, dispatch);

const update = () => {
  ReactDOM.render(
    <Counter
      counter={store.getState()}
      inc={incDispatch}
      dec={decDispatch}
      rnd={() => {
        const value = Math.floor(Math.random()*10);
        rndDispatch(value);
      }}
    />,
    document.getElementById("root"));
};

update();

store.subscribe(update);