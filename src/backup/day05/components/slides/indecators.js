import React from 'react'
import './Slider'
const indecators = () => {
  return (
    <ul className='indecator'>
        {
            banners.map( (banners, index)=>(
                <li className={imgNum===index ? "active" : ""}
                    onClick={()=>setImgNum(index)}    
                >{index}</li>
            ))
        }
    </ul>
  )
}

export default indecators