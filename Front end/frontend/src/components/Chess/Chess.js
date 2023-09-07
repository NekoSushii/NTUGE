import { useMemo } from 'react'
import { Board } from './Board.js'
import { Game } from './Game.js'
const containerStyle = {
  width: 500,
  height: 500,
  border: '1px solid gray',
  margin: 'auto',
}
/**
 * The Chessboard Tutorial Application
 */
function Chess () {
  const game = useMemo(() => new Game(), [])
  return (
    <div style={containerStyle}>
      <Board game={game} />
    </div>
  )
}

export default Chess