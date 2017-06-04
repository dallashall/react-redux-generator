import { connect } from 'react-redux';
import ExamplePresentationalComponent from './example_presentational_component';
import {
  fetchExamples,
  fetchSingleExample,
  createExample,
  updateExample,
  destroyExample
} from '../../actions/example_actions';
import { asArray } from '../reducers/selectors'

const mapStateToProps = ({ examples }) => ({
  example: examples.current,
  examples: asArray(examples.all),
  errors: examples.errors
});

const mapDispatchToProps = dispatch => ({
  fetchExamples: () => dispatch(fetchExamples()),
  fetchSingleExample: exampleId => dispatch(fetchSingleExample(exampleId)),
  createExample: formExample => dispatch(createExample(formExample)),
  updateExample: formExample => dispatch(updateExample(formExample)),
  destroyExample: exampleId => dispatch(destroyExample(exampleId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExamplePresentationalComponent);
