import fetchPonyfill from 'fetch-ponyfill';
import { btoa } from 'Base64';

const { fetch } = fetchPonyfill();

function base64Encode(str) {
  return btoa(unescape(encodeURIComponent(str)));
}

function singleParamFormBody(key, value) {
  return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
}

function formBody(data) {
  const singleParam = key => singleParamFormBody(key, data[key]);
  return Object.keys(data).map(singleParam).join('&');
}

function formFetchParams(data) {
  return {
    body: formBody(data),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
  };
}

function apiFetch(endpoint, fetchParams) {
  const baseURL = 'https://api.feedreader.co/v1';
  const url = `${baseURL}/${endpoint}`;
  return fetch(url, fetchParams)
    .then(res => res.json())
    .then((json) => {
      if (!json.success) throw json;
      return json;
    })
    .catch((e) => { throw e; });
}

function authHeader(token) {
  return `Basic ${base64Encode(`${token}:`)}`;
}

export default (username, token) => {
  const apiFormFetch = (endpoint, params, method) => {
    const fetchParams = formFetchParams(params);
    fetchParams.headers.authorization = authHeader(token);
    fetchParams.method = method;
    return apiFetch(endpoint, fetchParams);
  };

  const api = {
    get: endpoint => apiFetch(endpoint, { method: 'GET' }),
    post: (endpoint, params) => apiFormFetch(endpoint, params, 'POST'),
    del: (endpoint, params) => apiFormFetch(endpoint, params, 'DELETE'),
  };

  return {
    get: api.get,
    signup: password => api.post('signup', { username, password }),
    articles: {
      get: id => api.get(`articles/${id}`),
    },
    feeds: {
      get: url => api.get(`feeds/${url}`),
    },
    user: {
      tokens: {
        create: password => api.post(`${username}/tokens`, { password }),
        delete: () => api.del(`${username}/tokens`, { token }),
      },
      feeds: {
        get: () => api.get(`${username}/feeds`),
      },
      labels: {
        create: (label) => {
          const endpoint = `${username}/labels`;
          return api.post(endpoint, { label });
        },
        get: label => api.get(`${username}/labels/${encodeURIComponent(label)}`),
        post: (label, hash) => {
          const endpoint = `${username}/labels/${encodeURIComponent(label)}`;
          return api.post(endpoint, { hash });
        },
        del: (label, hash) => {
          const endpoint = `${username}/labels/${encodeURIComponent(label)}`;
          return api.del(endpoint, { hash });
        },
      },
      folders: {
        create: (folder) => {
          const endpoint = `${username}/folders`;
          return api.post(endpoint, { folder });
        },
        get: feed => api.get(`${username}/folders?${feed}`),
        post: (folder, xmlurl) => {
          const endpoint = `${username}/folders/${encodeURIComponent(folder)}`;
          return api.post(endpoint, { xmlurl });
        },
        del: (folder, xmlurl) => {
          const endpoint = `${username}/folders/${encodeURIComponent(folder)}`;
          return api.del(endpoint, { xmlurl });
        },
      },
    },
  };
};
