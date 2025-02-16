import React from 'react'
import { FaChessPawn } from "react-icons/fa6";
import { IconContext } from 'react-icons/lib';
import './pawn.css'

const Pawn = ({color, id}) => {
  return (
    <div id={id} className='pawn'>
        <IconContext.Provider value={{color: color ? 'white' : 'black', size: '2rem'}}>
            <FaChessPawn />
        </IconContext.Provider>
    </div>
  )
}

export default Pawn