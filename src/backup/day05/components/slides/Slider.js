import React, { useState } from 'react'
import banners from '../../constants/banner'
import './Slider.css'
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";
import indecators from './indecators';
indecators
// 가지고오고 싶은것만 가져오는 법 
// import {banner01, banner02, banner03} from '../../constants/banner'


const Slider = () => {
    const [imgNum, setImgNum] = useState(0);
  return (
    <>
    <div className='btn-group'>
       <BsArrowLeftSquareFill 
       size="24px "
    //    className={imgNum >= 0 ?'left-btn btn active' : 'left-btn btn'}
            
            // style ={{left: 0, position:"absolute" }}
            onClick={()=>setImgNum(imgNum > 0 ? imgNum-1 : 3)}
            />
       <BsArrowRightSquareFill 
       className={imgNum >=3 ? 'right-btn btn active' : 'right-btn btn'}
            size="24px"
            style ={{right: 0, position:"absolute" }}
            onClick={()=>setImgNum(imgNum>=3 ? 0: imgNum+1)}
            />
    </div>

    <Indecators banners={banners} 
    imgNum={imgNum} 
    setImgNum={setImgNum}/>

    <div className='slider-container'>
        <div className='slider-box'
            style={{ left : `-${imgNum*100}vw`}}
        >
            { 
                banners.map(banner=>(
                    <div className='slider-img'>
                        <img src={banner} />
                    </div>    
                ))
            }
              
            </div>
        </div>
        
       </>
  )}
export default Slider


