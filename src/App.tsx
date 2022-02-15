import { Client } from 'boardgame.io/react'
import { SocketIO } from 'boardgame.io/multiplayer'

import { Wordle } from './Game'
import { Display } from './Display'
import { Controller } from './Controller'

// gitpod specific, client is running on 3000, server on 8000
const serverURL = window.location.origin.replace('3000', '8000')
const numPlayers = 3

const DisplayClient = Client({
  numPlayers,
  game: Wordle,
  board: Display,
  multiplayer: SocketIO({ server: serverURL }),
  debug: true,
})
const ControllerClient = Client({
  numPlayers,
  game: Wordle,
  board: Controller,
  multiplayer: SocketIO({ server: serverURL }),
  debug: true,
})

export { DisplayClient, ControllerClient }
