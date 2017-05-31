import {
  RECEIVE_SINGLE_EXAMPLE,
  RECEIVE_EXAMPLES,
  REMOVE_EXAMPLE
} from '../actions/example_actions';

const _nullExample = {
  stringVariable: "",
  numberVariable: 0
};

const _nullExamples = {
  all: {
    0: _nullExample
  },
  current: _nullExample
};

const ExampleReducer = (state = _nullExamples, action) => {
  Object.freeze(state);

  let newState = Object.assign({}, state);
  let all = newState.all

  switch(action.type) {

    case RECEIVE_EXAMPLES:

      return Object.assign(newState, { all: action.examples });

    case RECEIVE_SINGLE_EXAMPLE:

      let id = action.example.id;

      Object.assign(all, { [id]: action.example });

      return Object.assign({ all }, { current: action.example });

    case REMOVE_EXAMPLE:

      delete all[action.exampleId];

      let current = newState.current;
      if (current.id === action.exampleId) {
        current = _nullExample;
      }

      return { all, current };

    default:

      return state;
  }
};

export default ExampleReducer;
