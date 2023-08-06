import React, {useState} from 'react'
import './Motions10.css'
import { motion, useScroll } from 'framer-motion'
import img from '../assets/4607564680502824585.jpg'
 
export const Motions = () => {
  const { scrollYProgress } = useScroll();
  console.log( scrollYProgress )

  return (
    <>
      <motion.nav
           style={{ scaleX: scrollYProgress }}
          className='scroll_bar'
      >
      </motion.nav>
      <LoremIpsum />
    </>
  )
}

export default Motions

function LoremIpsum(){
  return(
    <div style={{width:"200px"}}>
      <article>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt fugiat, numquam possimus, rerum eos accusantium asperiores totam maxime architecto, esse libero in? Consequatur eveniet, est possimus cum inventore corrupti quisquam?
      </article>
      <article>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt fugiat, numquam possimus, rerum eos accusantium asperiores totam maxime architecto, esse libero in? Consequatur eveniet, est possimus cum inventore corrupti quisquam?
      </article>
      <article>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt fugiat, numquam possimus, rerum eos accusantium asperiores totam maxime architecto, esse libero in? Consequatur eveniet, est possimus cum inventore corrupti quisquam?
      </article>
      <article>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt fugiat, numquam possimus, rerum eos accusantium asperiores totam maxime architecto, esse libero in? Consequatur eveniet, est possimus cum inventore corrupti quisquam?
      </article>
      <article>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt fugiat, numquam possimus, rerum eos accusantium asperiores totam maxime architecto, esse libero in? Consequatur eveniet, est possimus cum inventore corrupti quisquam?
      </article>
      <article>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt fugiat, numquam possimus, rerum eos accusantium asperiores totam maxime architecto, esse libero in? Consequatur eveniet, est possimus cum inventore corrupti quisquam?
      </article>
      <article>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt fugiat, numquam possimus, rerum eos accusantium asperiores totam maxime architecto, esse libero in? Consequatur eveniet, est possimus cum inventore corrupti quisquam?
      </article>
      <article>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt fugiat, numquam possimus, rerum eos accusantium asperiores totam maxime architecto, esse libero in? Consequatur eveniet, est possimus cum inventore corrupti quisquam?
      </article>
      <article>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt fugiat, numquam possimus, rerum eos accusantium asperiores totam maxime architecto, esse libero in? Consequatur eveniet, est possimus cum inventore corrupti quisquam?
      </article>
      <article>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt fugiat, numquam possimus, rerum eos accusantium asperiores totam maxime architecto, esse libero in? Consequatur eveniet, est possimus cum inventore corrupti quisquam?
      </article>
      <article>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt fugiat, numquam possimus, rerum eos accusantium asperiores totam maxime architecto, esse libero in? Consequatur eveniet, est possimus cum inventore corrupti quisquam?
      </article>
      <article>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt fugiat, numquam possimus, rerum eos accusantium asperiores totam maxime architecto, esse libero in? Consequatur eveniet, est possimus cum inventore corrupti quisquam?
      </article>
      <article>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt fugiat, numquam possimus, rerum eos accusantium asperiores totam maxime architecto, esse libero in? Consequatur eveniet, est possimus cum inventore corrupti quisquam?
      </article>
      <article>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt fugiat, numquam possimus, rerum eos accusantium asperiores totam maxime architecto, esse libero in? Consequatur eveniet, est possimus cum inventore corrupti quisquam?
      </article>
      <article>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt fugiat, numquam possimus, rerum eos accusantium asperiores totam maxime architecto, esse libero in? Consequatur eveniet, est possimus cum inventore corrupti quisquam?
      </article>
      <article>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt fugiat, numquam possimus, rerum eos accusantium asperiores totam maxime architecto, esse libero in? Consequatur eveniet, est possimus cum inventore corrupti quisquam?
      </article>
      <article>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt fugiat, numquam possimus, rerum eos accusantium asperiores totam maxime architecto, esse libero in? Consequatur eveniet, est possimus cum inventore corrupti quisquam?
      </article>
      <article>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt fugiat, numquam possimus, rerum eos accusantium asperiores totam maxime architecto, esse libero in? Consequatur eveniet, est possimus cum inventore corrupti quisquam?
      </article>
      <article>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt fugiat, numquam possimus, rerum eos accusantium asperiores totam maxime architecto, esse libero in? Consequatur eveniet, est possimus cum inventore corrupti quisquam?
      </article>
      <article>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt fugiat, numquam possimus, rerum eos accusantium asperiores totam maxime architecto, esse libero in? Consequatur eveniet, est possimus cum inventore corrupti quisquam?
      </article>

    </div>
  )
}