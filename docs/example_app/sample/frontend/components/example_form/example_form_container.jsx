import { connect } from 'react-redux';
import ExampleForm from './example_form';
import {
  createExample,
  updateExample
} from '../../actions/example_actions';

const mapDispatchToProps = dispatch => ({
  createExample: formExample => dispatch(createExample(formExample)),
  updateExample: formExample => dispatch(updateExample(formExample)),
});

export default connect(
  null,
  mapDispatchToProps
)(ExampleForm);
