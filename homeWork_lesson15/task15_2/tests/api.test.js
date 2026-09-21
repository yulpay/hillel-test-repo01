import { jest } from '@jest/globals';

jest.unstable_mockModule('axios', () => ({
  default: {
    get: jest.fn(),
  },
}));

const axios = (await import('axios')).default;
const { fetchDataWithCustomConfig } = await import('../src/api.js');

describe('fetchDataWithCustomConfig', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('має надсилати GET запит із кастомними заголовками та параметрами URL', async () => {
    const mockUrl = 'https://api.example.com/data';
    const mockParams = { page: 1, limit: 10 };
    const mockHeaders = { Authorization: 'Bearer token123' };
    const mockData = { success: true };

    axios.get.mockResolvedValueOnce({ data: mockData });

    const result = await fetchDataWithCustomConfig(mockUrl, mockParams, mockHeaders);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(mockUrl, {
      params: mockParams,
      headers: mockHeaders,
    });
    expect(result).toEqual(mockData);
  });
});
