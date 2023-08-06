import React, {useState} from 'react'
import './Motions11.css'
import { motion, useScroll } from 'framer-motion'
import img from '../assets/4607564680502824585.jpg'
 
export const Motions = () => {
  const { scrollYProgress } = useScroll();
  console.log( scrollYProgress )

  return (
    <>
      <div className='scroll_trigger'>
        <motion.div  className='scroll_box'
                      initial={{ opacity:0, scale:0 }}
                      whileInView={{ opacity:1, scale:1 }}
        />
      </div>
      <div className='scroll_trigger'>
        <motion.div  className='scroll_box'
                   initial={{ opacity:0, scale:0 }}
                   whileInView={{ opacity:1, scale:1 }}
                   viewport={{once:true}}
        />
      </div>
      <div className='scroll_trigger'>
        <motion.div  className='scroll_box'
                initial={{ opacity:0, scale:0 }}
                whileInView={{ opacity:1, scale:1 }}
                viewport={{ amount:0.2, once:true }}
        />
      </div>
      <div className='scroll_trigger'>
        <motion.div  className='scroll_box'
               initial={{ opacity:0, scale:0 }}
               whileInView={{ opacity:1, scale:1 }}
        />
      </div>
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