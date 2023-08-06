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
            // initial={{ opacity: 0}}
            onClick={()=>setToggle(!toggle)}

            animate={{
              x: toggle ? 100 : 0, 
              y: toggle ? 100 : 0, 
              opacity: toggle ? 1 : 0.5
            }}
            transition={{ 
              duration : 1, 
              type:"spring",
              stiffness:200,
              damping:20
            }}
    >
      <img src={img} />
    </motion.div>

    <motion.div
          className='box'
          animate={{ rotate: isRotate ? 360 : 0 }}
          onClick={ ()=> setIsRotate(!isRotate)}
    >
      Motions
    </motion.div>
    </>
  )
}

export default Motions