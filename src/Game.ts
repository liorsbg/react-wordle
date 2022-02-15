import { Game } from 'boardgame.io'
import { Stage } from 'boardgame.io/core'

// import { INVALID_MOVE } from 'boardgame.io/core'

export interface WordleState {
  currentGuess: string
  pendingChar: string
}

export const Wordle: Game<WordleState> = {
  setup: () => ({
    currentGuess: '',
    pendingChar: '',
  }),

  turn: {
    activePlayers: { all: Stage.NULL },
    // moveLimit: 5,
  },

  moves: {
    updateG: (G, ctx, update) => {
      return { ...G, ...update }
    },
  },
}
