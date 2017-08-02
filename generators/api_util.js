const fs = require('fs');

const apiUrl = function apiUrl(baseUrl = "http://localhost:3000") {
  return `const apiUrl = '${baseUrl}';\n`;
};

const xmlHttpToApi = `
const _toApi = function _toApi(url, method, payload, token) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.onload = function xhrOnload() {
      resolve(JSON.parse(this.response));
    };

    xhr.onerror = function xhrOnerror() {
      reject(JSON.parse(this.response));
    };

    const params = JSON.stringify(payload);
    const fullUrl = apiUrl + url;

    xhr.open(method, fullUrl);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Authorization', \`Token \${token}\`);
    xhr.send(params);
  });
};
`;

const fetchToApi = `
const jsonTokenHeader = token => (new Headers({
  'Content-Type': 'application/json',
  Authorization: \`Token \${token}\`   // Optional
}));

const _toApi = function _toApi(url, method, payload, token) {
  return fetch(apiUrl + url, {
    method,
    headers: jsonTokenHeader(token),
    body: JSON.stringify(payload)
  })
  .then(res => res.json()); // Expects JSON response from server
};
`;

const helpers = `
export const postToApi = function postToApi(url, payload, token) {
  return _toApi(url, 'POST', payload, token);
};

export const patchToApi = function patchToApi(url, payload, token) {
  return _toApi(url, 'PATCH', payload, token);
};

export const deleteToApi = function deleteToApi(url, payload, token) {
  return _toApi(url, 'DELETE', payload, token);
};

export const getToApi = function getToApi(url, payload, token) {
  return _toApi(url, 'GET', payload, token);
};
`;

const makeApiUtil = function makeApiUtil({ url, fetch }, cb) {
  const requestStruct = fetch ? fetchToApi : xmlHttpToApi;
  const fileText = apiUrl(url) + requestStruct + helpers;
  fs.mkdirSync('utils');
  fs.writeFile('utils/api_utils.js', fileText, () => cb('Finished creating api_util.js'));
};

module.exports = makeApiUtil;
