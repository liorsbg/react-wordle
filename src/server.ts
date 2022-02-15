// src/server.js
import { Server, Origins } from 'boardgame.io/server'
import { Wordle } from './Game'

const server = Server({
  games: [Wordle],
  origins: [Origins.LOCALHOST],
})

server.run(8000)
