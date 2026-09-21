import axios from 'axios';

export async function fetchDataWithCustomConfig(url, params = {}, headers = {}) {
  const response = await axios.get(url, {
    params,
    headers,
  });
  return response.data;
}
