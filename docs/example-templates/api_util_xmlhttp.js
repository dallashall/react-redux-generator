// The following is an easily configurable, modular
// CRUD interface. It uses the fetch protocal.

const apiUrl = '[API_URL_HERE]';

const _toApi = function(url, method, payload, token) {
  return new Promise(function(resolve, reject) {
    let xhr = new XMLHttpRequest();

    xhr.onload = function() {
      resolve(JSON.parse(this.responseBody));
    };

    xhr.onerror = function() {
      reject(JSON.parse(this.responseBody));
    };
    
    const params = JSON.stringify(payload);

    xhr.open(method, url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Authorization', `Token ${token}`);
    xhr.send(params);
  });
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
}

export const patchToApi = function(url, payload, token) {
  return _toApi(url, 'PATCH', payload, token);
}

export const deleteToApi = function(url, payload, token) {
  return _toApi(url, 'DELETE', payload, token);
}

export const getToApi = function(url, payload, token) {
  return _toApi(url, 'GET', payload, token);
}
