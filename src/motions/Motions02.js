import React, {useState} from 'react'
import './Motions.css'
import { motion } from 'framer-motion'

const Motions = () => {
    const [toggle, setToggle]=useState(false);

  return (
    <motion.div
            className='box'
            // style={{ opacity:0}}
            initial={{ opacity: 0}}
            animate={{x:"100px", y:"100px", opacity:1}}
    >Motions</motion.div>
  )
}

export default Motions