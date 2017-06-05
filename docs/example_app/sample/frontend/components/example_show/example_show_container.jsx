import { connect } from 'react-redux';
import ExampleShow from './example_show';

const mapStateToProps = state => ({
  example: state.current
});

export default connect(
  mapStateToProps
)(ExampleShow);
