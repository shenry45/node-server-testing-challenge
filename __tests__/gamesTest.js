const request = require('supertest');

const server = require('../api/server.js');
const db = require('../data/db-config.js');
// const calculator = require('../calculator.js');

describe('games', () => {

  // clear db before tests
  beforeEach(async () => {
    await db('games').truncate();
  });

  // check db test env
  it('server in testing environment', () => {
    expect(process.env.DB_ENV).toBe('testing');
  });

  // get games from db
  it('should return JSON games list', async () => {
    await request(server)
      .get('/')
      .then(res => {
        expect(res.type).toBe('application/json');
        expect(res.status).toBe(200);
      })
  });
  //

  // add game to db for delete test
  it('should add game', async () => {
      await request(server)
        .post('/add')
        .send({name: 'MW2'})
        .then(async (res) => {
          const testGame = await db('games').where('name', 'MW2');
          expect(testGame).toHaveLength(1);
        })
      
      // db('games').insert({name: 'MW2'});
  });
  // make sure if no req key "name" will fail
  it('fails to add game', async () => {
    await request(server)
      .post('/add')
      .send()
      .then(res => {
        expect(res.status).toBe(500);
      })
  });

  // make sure if no req key "id" will fail
  it('should delete specific game', async () => {
    // req param placeholder not accepted by Jest
    await request(server)
      .delete('/')
      .send()
      .then(res => {
        expect(res.status).toBe(404);
      })
  });
  // make sure no body is returned
  it('should delete and return no body', async () => {
    await request(server)
      .delete('/')
      .send({id: '1'})
      .then(res => {
        expect(res.body).toStrictEqual({});
      })
  })
});

// describe('calc proto', () => {
//   it('should return 4', () => {
//     expect(calculator(2, 2)).toBe(4);
//   })
// })