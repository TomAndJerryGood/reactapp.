import React, {useState} from 'react'
import './Motions09.css'
import { motion } from 'framer-motion'
import img from '../assets/4607564680502824585.jpg'
 
const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
}

export const Motions = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav
      animate={isOpen ? "open" : "closed"}
      variants={variants}
    >
      <button onClick={() => setIsOpen(isOpen => !isOpen)} >
        onClick
      </button> 
    </motion.nav>
  )
}

export default Motions