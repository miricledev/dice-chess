import React from 'react'
import './boardTile.css'

export const BoardTile = ({children, id, occupied, piece}) => {
    const color = (children.charCodeAt(0) + Number(children[1])) % 2
    return (
        <div 
            className={!color ? 'dark-tile' : 'light-tile'}
            id={id}
            >
                {occupied ? piece : children}
                
        </div>
    )
}
