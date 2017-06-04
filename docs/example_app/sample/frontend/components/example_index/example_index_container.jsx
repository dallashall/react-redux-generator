import { connect } from 'react-redux';
import ExampleIndex from './example_index';
import { asArray } from '../reducers/selectors';

const mapStateToProps = state => ({
  examples: asArray(state.all),
});

export default connect(
  mapStateToProps
)(ExampleIndex);
