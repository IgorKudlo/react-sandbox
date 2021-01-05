import { createStore } from "redux";

const reducer = (state, action) => {

    if (state === undefined) {
        return 0;
    }

    switch (action.type) {
        case 'RND':
          return state + action.payload;

        case 'INC':
            return state + 1;

        case 'DEC':
            return state - 1;

        default:
            return state;
    }
};

const store = createStore(reducer);
/*store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch({type: 'INC'});
store.dispatch({type: 'INC'});*/

const inc = () => {
  return { type: 'INC' }
}

const dec = () => {
  return { type: 'DEC' }
}

const rnd = (payload) => {
  return { type: 'DEC', payload: payload }
}

document
    .getElementById('inc')
    .addEventListener('click', () => {
        store.dispatch(inc());
    });

document
  .getElementById('dec')
  .addEventListener('click', () => {
      store.dispatch(dec());
  });

document
  .getElementById('rnd')
  .addEventListener('click', () => {
    const payload = Math.floor(Math.random()*10);
    store.dispatch(rnd(payload));
  });

const update = () => {
  document
    .getElementById('counter')
    .innerHTML = store.getState();
};

store.subscribe(update);