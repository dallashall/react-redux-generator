import {
  deleteToApi,
  getToApi,
  patchToApi,
  postToApi
} from '../util/api_util';

export const RECEIVE_SINGLE_EXAMPLE = "RECEIVE_SINGLE_EXAMPLE";
export const RECEIVE_EXAMPLES = "RECEIVE_EXAMPLES";
export const REMOVE_EXAMPLE = "REMOVE_EXAMPLE";

const receiveSingleExample = (example) => ({
  type: RECEIVE_SINGLE_EXAMPLE,
  example
});

const receiveExamples = (example) => ({
  type: RECEIVE_EXAMPLES,
  examples
});

const removeExample = (exampleId) => ({
  type: REMOVE_EXAMPLE,
  exampleId
});

export const fetchExamples = () => (dispatch) => {
  return getToApi(`examples`)
    .then(
      examples => dispatch(receiveExamples(examples))
    )
};

export const fetchSingleExample = (exampleId) => (dispatch) => {
  return getToApi(`examples/${exampleId}`)
    .then(
      example => dispatch(receiveSingleExample(example))
    )
};

// The format for objects here should be as follows:
// 
// formExample = {
//   example: {
//     id: 1
//   }
// }

export const createExample = (formExample) => (dispatch) => {
  return postToApi('examples', formExample)
    .then(
      example => dispatch(receiveSingleExample(example))
    )
};

export const updateExample = (formExample) => (dispatch) => {
  return patchToApi(`examples/${formExample.example.id}`, formExample)
    .then(
      example => dispatch(receiveSingleExample(example))
    )
};

export const destroyExample = (exampleId) => (dispatch) => {
  return deleteToApi(`examples/${exampleId}`)
    .then(
      example => dispatch(removeExample(example))
    )
};
