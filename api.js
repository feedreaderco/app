function api(endpoint, method, params) {
  const baseURL = 'https://api.feedreader.co/v1';
  const url = `${baseURL}/${endpoint}`;
  return fetch(endpoint, { method, params }).then(res => res.json());
}

const lib = (username, token) => {
  return {
    articles: {
      get: () => {
      },
    },
    feeds: {
      get: (url) => {
      },
    },
    user: {
      tokens: {
        create: (password) => api(`${username}/tokens`, 'POST', {password}),
        delete: () => {
        },
      },
      feeds: {
        get: () => {
        },
      },
      labels: {
        create: () => {
        },
        get: () => {
        },
      },
      folders: {
        create: () => {
        },
        delete: () => {
        },
        get: (feed) => api(`${username}/folders?${feed}`, 'GET'),
      },
    },
  };
}

export default ({username, password, token }) => {
  if (!token) {
    return lib(username).user.tokens.create(password)
      .then(res => lib(username, res.token));
  }
  return lib(username, token);
}
