import { jest } from '@jest/globals';

jest.unstable_mockModule('axios', () => ({
  default: {
    get: jest.fn(),
  },
}));

const axios = (await import('axios')).default;
const { fetchUserData } = await import('../src/api.js');

describe('Тести API для fetchUserData', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('має отримувати та повертати дані користувача при 200 OK', async () => {
    const mockUrl = 'https://api.example.com/users/1';
    const mockUserData = { id: 1, name: 'John Doe' };

    axios.get.mockResolvedValueOnce({ data: mockUserData });

    const result = await fetchUserData(mockUrl);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(mockUrl);
    expect(result).toEqual(mockUserData);
  });

  test('має викидати кастомну помилку у разі збою API', async () => {
    const mockUrl = 'https://api.example.com/users/999';
    const mockErrorResponse = {
      response: {
        status: 404,
        data: { message: 'Користувача не знайдено' },
      },
    };

    axios.get.mockRejectedValueOnce(mockErrorResponse);

    await expect(fetchUserData(mockUrl)).rejects.toThrow('Користувача не знайдено');
    expect(axios.get).toHaveBeenCalledTimes(1);
  });
});
