import axios from 'axios';

export async function fetchUserData(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Не вдалося отримати дані користувача');
  }
}
