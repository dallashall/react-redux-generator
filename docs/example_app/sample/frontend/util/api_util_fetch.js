// The following is an easily configurable, modular
// CRUD interface. It uses the fetch protocal.

const apiUrl = 'http://localhost:3000/api/';

const jsonTokenHeader = token => (new Headers({
  'Content-Type': 'application/json',
  Authorization: `Token ${token}`   // Optional
})
);

const _toApi = function _toApi(url, method, payload, token) {
  const body = method === 'GET' ? null : JSON.stringify(payload);
  return fetch(apiUrl + url, {
    method,
    headers: jsonTokenHeader(token),
    body
  })
  .then(res => res.json()); // Expects JSON response from server
};

// payload should be a POJO, with all attributes nested
// under the name of the model that is being requested/
// modified/deleted.
// payload = {
//   user: {
//     email: 'email@email.email',
//     password: '********'
//   }
// }
// *_toApi() will return a promise object with a json-
// formatted PromiseValue.

export const postToApi = function postToApi(url, payload, token) {
  return _toApi(url, 'POST', payload, token);
};

export const patchToApi = function patchToApi(url, payload, token) {
  return _toApi(url, 'PATCH', payload, token);
};

export const deleteToApi = function deleteToApi(url, payload, token) {
  return _toApi(url, 'DELETE', payload, token);
};

export const getToApi = function getToApi(url, token) {
  return _toApi(url, 'GET', null, token);
};
