const request = require('supertest');

const server = require('../api/server.js');
const db = require('../data/db-config.js');
// const calculator = require('../calculator.js');

describe('games', () => {

  // clear db before tests
  beforeEach(async () => {
    await db('games').truncate();
  })

  it('server in testing environment', () => {
    expect(process.env.DB_ENV).toBe('testing');
  })

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
      await db('games').insert({name: 'MW2'});

      const testGame = await db('games').where('name', 'MW2');
      expect(testGame).toHaveLength(1);
  })

  // delete specific game by ID from db
  it('should delete specific game', async () => {
    const id = await db.select('id').from('games').where('name', 'MW2');
    
    await db('games').where('id', id).delete()
    
  })
});

// describe('calc proto', () => {
//   it('should return 4', () => {
//     expect(calculator(2, 2)).toBe(4);
//   })
// })