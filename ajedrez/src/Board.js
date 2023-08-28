import Square from './Square.js'

export default class Board {
  constructor() {
    this.grid = Array.from({ length: 8 }, () =>
      Array.from({ length: 8 }, () => new Square())
    )
    this.spawnPieces()
  }

  spawnPieces() {
    // Pawns
    WHITE_PAWN_ROW = 1
    BLACK_PAWN_ROW = 6
    this.grid[WHITE_PAWN_ROW].forEach((square) => square.setPiece(new Pawn()))
    this.grid[BLACK_PAWN_ROW].forEach((square) => square.setPiece(new Pawn()))
  }
}
