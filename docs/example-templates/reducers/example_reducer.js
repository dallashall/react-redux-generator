import {
  RECEIVE_SINGLE_EXAMPLE,
  RECEIVE_EXAMPLES,
  REMOVE_EXAMPLE,
  RECEIVE_EXAMPLE_ERRORS
} from '../actions/example_actions';

const _nullExample = {
  id: 0,
  stringVariable: "",
  numberVariable: 0
};

const _nullExamples = {
  all: {
    0: _nullExample
  },
  current: _nullExample,
  errors: []
};

const _blankErrors = {
  errors: []
};

const ExampleReducer = (state = _nullExamples, action) => {
  Object.freeze(state);

  const newState = Object.assign({}, state);
  const all = newState.all;

  switch (action.type) {

    case RECEIVE_EXAMPLES: {
      return Object.assign(
        newState,
        { all: action.examples },
        _blankErrors
      );
    }
    case RECEIVE_SINGLE_EXAMPLE: {
      const id = action.example.id;

      Object.assign(all, { [id]: action.example });

      return Object.assign(
        { all },
        { current: action.example },
        _blankErrors
      );
    }
    case REMOVE_EXAMPLE: {
      delete all[action.exampleId];

      let current = newState.current;
      if (current.id === action.exampleId) {
        current = _nullExample;
      }

      return { all, current };
    }
    case RECEIVE_EXAMPLE_ERRORS: {
      const errors = action.errors;

      return Object.assign(newState, { errors });
    }
    default:
      return state;
  }
};

export default ExampleReducer;
