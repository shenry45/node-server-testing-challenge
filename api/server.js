const express = require('express');
const db = require('../data/db-config.js');

const server = express();

server.use(express.json());

server.get('/', async (req, res) => {
  try {
    const games = await db('games');

    if (games) {
      res.status(200).json({
        games
      })
    }
  } catch (err) {
    res.status(500).json({
      message: 'Error getting game list.'
    })
  }
})

server.post('/add', async (req, res) => {
  const {name} = req.body;

  try {
    const addGame = await db('games').insert({name});

    if (addGame) {
      res.status(201).json({
        message: 'Game added to the library. Thank you.'
      })
    }
  } catch(err) {
    res.status(500).json({
      message: 'Error adding new game'
    })
  }
})

server.delete('/:id', async (req, res) => {
  const {id} = req.params;

  try {
    const deleteGame = await db('games').where('id', id).delete();

    if (deleteGame) {
      res.status(204).json({
        message: 'Game deleted'
      })
    }
  } catch(err) {
    res.status(500).json({
      message: 'Error deleting game'
    })
  }
})

module.exports = server;