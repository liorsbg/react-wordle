import { Game } from 'boardgame.io'
// import { INVALID_MOVE } from 'boardgame.io/core'

export interface WordleState {
  guesses: string[]
  isRevealing?: boolean
  selectedChar: string
}

export const Wordle: Game<WordleState> = {
  setup: () => ({ guesses: [''], isRevealing: false, selectedChar: '' }),

  turn: {
    moveLimit: 5,
  },

  moves: {
    setGuesses: (G, ctx, guesses) => {
      G.guesses = guesses
    },
    setIsRevealing: (G, ctx, isRevealing) => {
      G.isRevealing = isRevealing
    },
    selectChar: (G, ctx, char) => {
      G.selectedChar = char
    },
  },
}
