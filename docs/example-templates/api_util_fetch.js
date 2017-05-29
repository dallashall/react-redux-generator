// The following is an easily configurable, modular
// CRUD interface. It uses the fetch protocal.

const apiUrl = '[API_URL_HERE]';

const jsonTokenHeader = (token) => (new Headers({
    'Content-Type': 'application/json',
    'Authorization': `Token ${token}`   // Optional
  })
);

const _toApi = function(url, method, payload, token) {
  return fetch(apiUrl + url, {
    method: method,
    headers: jsonTokenHeader(token),
    body: JSON.stringify(payload)
  })
  .then(res => res.json()); // Expects JSON response from server
}

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

export const postToApi = function(url, payload, token) {
  return _toApi(url, 'POST', payload, token);
};

export const patchToApi = function(url, payload, token) {
  return _toApi(url, 'PATCH', payload, token);
};

export const deleteToApi = function(url, payload, token) {
  return _toApi(url, 'DELETE', payload, token);
};

export const getToApi = function(url, token) {
  return _toApi(url, 'GET', null, token);
};
