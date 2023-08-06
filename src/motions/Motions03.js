import React, {useState} from 'react'
import './Motions.css'
import { motion } from 'framer-motion'
import img from '../assets/4607564680502824585.jpg'

const Motions = () => {
    const [toggle, setToggle]=useState(false);

  return (
    // <motion.a
    //         className='box'
    //         style={{ display: "block"}}
    //         initial={{ opacity: 0}}
    //         animate={{x:"100px", y:"100px", opacity:1}}
    // >Motions</motion.a>
    <motion.div
            
            className='box'
            style={{ display: "block", 
                      overflow:"hidden"
            }}
            initial={{ opacity: 0}}
            animate={{x:"100px", y:"100px", opacity:1}}
    >
      <img src={img} />
    </motion.div>
  )
}

export default Motions