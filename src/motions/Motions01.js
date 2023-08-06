import React, {useState} from 'react'
import './Motions.css'

const Motions = () => {
    const [toggle, setToggle]=useState(false);

  return (
    <div className={ toggle ? "box active" : "box"}
         onClick={()=>setToggle(!toggle)}
    >Motions</div>
  )
}

export default Motions