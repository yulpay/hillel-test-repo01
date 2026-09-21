import axios from 'axios';

export async function fetchData(url = 'https://invalid-url-domain.test/error-endpoint') {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return error.message || 'Запит з помилкою зі статусом 404';
  }
}
