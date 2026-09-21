import { jest, describe, it, expect } from '@jest/globals';
import axios from 'axios';
import { fetchData } from '../src/api.js';

describe('Обробка помилок fetchData', () => {
  it('має обробляти помилку та повертати повідомлення', async () => {
    const errorMessage = 'Запит з помилкою зі статусом 404';

    const spy = jest.spyOn(axios, 'get').mockRejectedValue(new Error(errorMessage));

    const result = await fetchData('https://invalid-url-domain.test/error-endpoint');

    expect(result).toBe(errorMessage);
    expect(spy).toHaveBeenCalledWith('https://invalid-url-domain.test/error-endpoint');

    spy.mockRestore();
  });
});
