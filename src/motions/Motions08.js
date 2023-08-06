import React, {useState} from 'react'
import './Motions.css'
import { motion } from 'framer-motion'
import img from '../assets/4607564680502824585.jpg'

const Motions = () => {
    const boxVarient ={
          opacityAni:{
            opacity: 1, 
            x:[100, 200, -300, 400]
          },
          scaleAni:{
            scale : 1.2,
            x: 100
          },
          rotate:{
            rotate:360
          },
          hidden:{
            opacity :0.5
          }
    }
  return (
    <>
    <motion.div
          className='box'
          initial="hidden"
          variants={boxVarient}
          animate="opacityAni"
          transition={{duration:2}}
    >
      Motions
    </motion.div>
    </>
  )
}

export default Motions