const request = require('supertest');

const server = require('../api/server.js');
const calculator = require('../calculator.js');

describe('games', () => {
  // get games from db
  it('should return JSON games list', () => {
    request(server)
      .get('/')
      .expect('Content-type', 'json')
      .expect(200)
  })

  // delete specific game by ID from db
  it('should delete specific game', () => {
    request(server)
      .delete('/:id')
      .expect(204)
  })
});

// describe('calc proto', () => {
//   it('should return 4', () => {
//     expect(calculator(2, 2)).toBe(4);
//   })
// })