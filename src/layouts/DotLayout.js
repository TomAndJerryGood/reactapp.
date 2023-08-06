import React, { useState } from 'react'
import './DotLayout.css'

const dots = ["main01", "main02", "main03", "main04"]

const DotLayout = ({isActive, setIsActive}) => {
  return (
    <div  className='dots'>
        <ul>
            {
                dots.map(dot=>(
                    <li key={dot}>
                        <a href={`#${dot}`}
                            className={isActive === dot ? "active" : ""}
                            onClick={()=>setIsActive(dot)}
                        >{dot}</a>
                    </li> 
                ))
            }
        </ul>
    </div>
  )
}

export default DotLayout