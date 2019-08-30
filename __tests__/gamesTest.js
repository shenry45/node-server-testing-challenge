const request = require('supertest');

const server = require('../api/server.js');
// const calculator = require('../calculator.js');

describe('games', () => {
  // get games from db
  it('should return JSON games list', async () => {
    await request(server)
      .get('/')
      .then(res => {
        expect(res.type).toBe('application/json');
        expect(res.status).toBe(200);
      })
  });

  // add game to db for delete test
  it('should add game', async () => {
    await request(server)
      .post('/add')
      .then(res => {
        send({name: 'MW2'})
        expect(res.type).toBe('application/json')
        expect(res.status).toBe(201)
      })
  })

  // delete specific game by ID from db
  it('should delete specific game', async () => {
    await request(server)
      .delete('/:id')
      .then(res => {
        expect(res.status).toBe(204)
      })
  })
});

// describe('calc proto', () => {
//   it('should return 4', () => {
//     expect(calculator(2, 2)).toBe(4);
//   })
// })