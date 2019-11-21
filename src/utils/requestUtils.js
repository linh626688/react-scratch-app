import axios from 'axios'

export const METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
}

export function callApi(url, method, data = {}) {
  const headers = {
    // [BROWSER_ID]: browserId
  };
  return axios({
    method,
    url,
    headers,
    data,
  })
}
