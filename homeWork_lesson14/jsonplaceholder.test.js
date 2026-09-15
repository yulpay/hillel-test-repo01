/* eslint-disable no-undef */
const axios = require('axios');

const BASE_URL = 'https://jsonplaceholder.typicode.com';

describe('JSONPlaceholder API Test Suite', () => {

  test('1. GET /posts - статус 200 та масив постів', async () => {
    const response = await axios.get(`${BASE_URL}/posts`);
    
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBeGreaterThan(0);
    expect(response.data[0]).toHaveProperty('id');
    expect(response.data[0]).toHaveProperty('title');
  });

  test('2. GET /posts/1 - статус 200 та об\'єкт поста', async () => {
    const response = await axios.get(`${BASE_URL}/posts/1`);
    
    expect(response.status).toBe(200);
    expect(response.data.id).toBe(1);
    expect(response.data.userId).toBe(1);
    expect(typeof response.data.title).toBe('string');
    expect(typeof response.data.body).toBe('string');
  });

  test('3. GET /comments?postId=1 - статус 200 та відфільтровані коментарі', async () => {
    const response = await axios.get(`${BASE_URL}/comments`, {
      params: { postId: 1 }
    });
    
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.every(comment => comment.postId === 1)).toBe(true);
  });

  test('4. POST /posts - статус 201 та створений ресурс', async () => {
    const newPost = {
      title: 'Automated Test Title',
      body: 'Automated Test Body Content',
      userId: 1
    };

    const response = await axios.post(`${BASE_URL}/posts`, newPost);
    
    expect(response.status).toBe(201);
    expect(response.data).toMatchObject(newPost);
    expect(response.data).toHaveProperty('id');
  });

  test('5. POST /users - має повертати статус 201 та валідувати створеного користувача', async () => {
    const newUser = {
      name: 'Senior QA',
      username: 'qa_lead',
      email: 'qa@example.com'
    };

    const response = await axios.post(`${BASE_URL}/users`, newUser);
    
    expect(response.status).toBe(201);
    expect(response.data.name).toBe(newUser.name);
    expect(response.data.email).toBe(newUser.email);
    expect(response.data).toHaveProperty('id');
  });

});