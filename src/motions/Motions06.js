import React, {useState} from 'react'
import './Motions.css'
import { motion } from 'framer-motion'
import img from '../assets/4607564680502824585.jpg'

const Motions = () => {
    const [toggle, setToggle]=useState(false);
    const [isRotate, setIsRotate]=useState(false);

  return (
    <>
    <motion.div
          className='box'
          whileHover={{ scale : 1.2 }}
          whileTap={{ scale:0.8}}
    >
      Motions
    </motion.div>

    <motion.div
          className='box'
          drag="y"
    >
      Motions drag
    </motion.div>

    <motion.div
          className='box'
          drag
          dragConstraints={{
            right:20,
            left:-20,
            top:20,
            bottom:20
          }}
    >
      dragConstainsts
    </motion.div>
    </>
  )
}

export default Motions