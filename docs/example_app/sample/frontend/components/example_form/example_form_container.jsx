import { connect } from 'react-redux';
import ExampleForm from './example_form';
import {
  fetchSingleExample,
  createExample,
  updateExample,
  destroyExample } from '../../actions/example_actions';

const mapDispatchToProps = dispatch => ({
  fetchSingleExample: exampleId => dispatch(fetchSingleExample(exampleId)),
  createExample: formExample => dispatch(createExample(formExample)),
  updateExample: formExample => dispatch(updateExample(formExample)),
  destroyExample: exampleId => dispatch(destroyExample(exampleId))
});

export default connect(
  null,
  mapDispatchToProps
)(ExampleForm);
