import React, { useState } from 'react'
import { BoardTile } from './BoardTile';
import './board.css'
import Pawn from '../pieces/Pawn/Pawn';

const Board = () => {

    const chessboard = [
        ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],
        ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
        ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
        ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
        ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],
        ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],
        ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
        ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"]
      ];

    const boardTiles = chessboard.map((row, rowIndex) => {

        return(
            <div id={rowIndex} className='board-row'>
                {row.map((tile, tileIndex) => {
                    let piece = null;
                    const id = `${rowIndex}${tileIndex}`
                    // allocating pieces to their starting positions
                    if(tile[1] == '2' || tile[1] == 7){
                        piece = <Pawn id={id} color={tile[1] == '2' ? true : false} />
                    }

                    return (<BoardTile 
                                id={tile} 
                                occupied={piece ? true : false}
                                piece={piece}
                                >{tile}
                            </BoardTile>)}
                )}
            </div>
                )
            }
        )

    const [selectedpPiece, setSelectedPiece] = useState()
        
    return(
        <div className='board'>
            {boardTiles}
        </div>
        
    )
    }

  


export default Board