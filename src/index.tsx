import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { DisplayClient, ControllerClient } from './App'
import reportWebVitals from './reportWebVitals'

const makeMatchID = (length: number = 4) => {
  const characters = 'ABCDEFGHIJKLMNPQRSTUVWXYZ123456789'
  const charactersLength = characters.length

  return [...new Array(length)]
    .map(() => characters.charAt(Math.floor(Math.random() * charactersLength)))
    .join('')
}

const url = new URL(window.location.href)

const showDisplay = !url.pathname.includes('controller')
const showController = !url.pathname.includes('display')
const playerID = url.searchParams.get('playerID') || '0'
const matchID = url.searchParams.get('matchID') || makeMatchID()
url.searchParams.set('matchID', matchID)

ReactDOM.render(
  <React.StrictMode>
    {showDisplay && <DisplayClient playerID="0" matchID={matchID} />}
    {showController && (
      <ControllerClient playerID={playerID} matchID={matchID} />
    )}
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
