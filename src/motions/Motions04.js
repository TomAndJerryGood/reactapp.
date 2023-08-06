import React, {useState} from 'react'
import './Motions.css'
import { motion } from 'framer-motion'
import img from '../assets/4607564680502824585.jpg'

const Motions = () => {
    const [toggle, setToggle]=useState(false);

  return (
    <motion.div
            className='box' 
            initial={{ opacity: 0}}
            animate={{x:100, y:100, opacity:1}}
            transition={{ 
              duration : 1, 
              type:"spring",
              stiffness:200,
              damping:20
            }}
    >
      <img src={img} />
    </motion.div>
  )
}

export default Motions