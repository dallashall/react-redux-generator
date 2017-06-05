import { combineReducers } from 'redux';
import ExampleReducer from './example_reducer';

const RootReducer = combineReducers({
  examples: ExampleReducer,
});

export default RootReducer;
