import { connect } from 'react-redux';
import ExampleIndex from './example_index';
import { asArray } from '../../reducers/selectors';
import { fetchExamples } from '../../actions/example_actions';

const mapStateToProps = (state) => {
  if (state.all) {
    return {
      examples: asArray(state.all)
    };
  } else {
    return {
      examples: []
    };
  }
};

const mapDispatchToProps = dispatch => ({
  fetchExamples: () => dispatch(fetchExamples())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExampleIndex);
