import {
  deleteToApi,
  getToApi,
  patchToApi,
  postToApi
} from '../util/api_util_fetch';

export const RECEIVE_SINGLE_EXAMPLE = "RECEIVE_SINGLE_EXAMPLE";
export const RECEIVE_EXAMPLES = "RECEIVE_EXAMPLES";
export const REMOVE_EXAMPLE = "REMOVE_EXAMPLE";
export const RECEIVE_EXAMPLE_ERRORS = "RECEIVE_EXAMPLE_ERRORS";

const receiveSingleExample = example => ({
  type: RECEIVE_SINGLE_EXAMPLE,
  example
});

const receiveExamples = examples => ({
  type: RECEIVE_EXAMPLES,
  examples
});

const removeExample = exampleId => ({
  type: REMOVE_EXAMPLE,
  exampleId
});

const receiveExampleErrors = errors => ({
  type: RECEIVE_EXAMPLE_ERRORS,
  errors
});

export const fetchExamples = () => dispatch => (
  getToApi(`examples`)
    .then(
      examples => dispatch(receiveExamples(examples))
    )
);

export const fetchSingleExample = exampleId => dispatch => (
  getToApi(`examples/${exampleId}`)
    .then(
      example => dispatch(receiveSingleExample(example))
    )
);

// The format for objects here should be as follows:
//
// formExample = {
//   example: {
//     id: 1
//   }
// }

export const createExample = formExample => dispatch => (
  postToApi('examples', formExample)
    .then(
      example => dispatch(receiveSingleExample(example))
    )
);

export const updateExample = formExample => dispatch => (
  patchToApi(`examples/${formExample.example.id}`, formExample)
    .then(
      example => dispatch(receiveSingleExample(example))
    )
);

export const destroyExample = exampleId => dispatch => (
  deleteToApi(`examples/${exampleId}`)
    .then(
      example => dispatch(removeExample(example))
    )
);
