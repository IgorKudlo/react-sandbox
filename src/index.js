const initialState = 0;

const reducer = (state, action) => {

    if (state === undefined) {
        return 0;
    }

    switch (action.type) {
        case 'INC':
            return state + 1;

        default:
            return state;
    }
};

let state = reducer(undefined, {});

state = reducer(state, { type: 'INC' });
state = reducer(state, { type: 'INC' });

console.log(state)