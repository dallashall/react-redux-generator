// Sourced from redux-thunk (https://github.com/gaearon/redux-thunk)
// Duplicted here in order to minimize dependence on further packages

function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => next => (action) => {
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }

    return next(action);
  };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;
