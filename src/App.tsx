import { Client } from 'boardgame.io/react'
import { Wordle } from './Game'
import { Board } from './Board'

export default Client({ game: Wordle, board: Board, debug: true })
