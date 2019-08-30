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
      message: 'Internal Server Error'
    })
  }
})

module.exports = server;