import React from 'react'
import banner1 from '../assets/1025771674996577818.jpeg'
import banner2 from '../assets/1179738118976914914.jpg'
import banner3 from '../assets/1277497983932987640.jpg'
import banner4 from '../assets/1330121114514714854.jpg'
import imgs from '../constants/index'
// imgs = { img01, img02, img03, img04 }
import { img01, img02, img03, img04 } from '../constants/assets'
import datas from '../constants/index03'

const Coin = () => {
  return (
    <div>
      <h2>public 폴더의 내용 사용</h2>
      <div>
        <img src="./images/public/images/2975560144207848275.jpg" />
        <img src="./images/public/images/3091874388905099819.jpg" />
        <img src="./images/public/images/3229944638123116053.jpg" />
        <img src="./images/public/images/3310362535514266889.jpg" />
        <img src="./images/public/images/3347778354037551556.jpeg" />
      </div>
      <h2>assets : assets 이미지를 직접 import 하여 사용하기</h2>
      <div>
          <img src={banner1} alt="설명"/>
          <img src={banner2} alt="설명"/>
          <img src={banner3} alt="설명"/>
          <img src={banner4} alt="설명"/>
      </div>
      <h2>constants 로 만들어진 객체 사용하기 1 </h2>
      <div>
          <img src={imgs.img01} alt="설명"/>
          <img src={imgs.img02} alt="설명"/>
          <img src={imgs.img03} alt="설명"/>
          <img src={imgs.img04} alt="설명"/>
      </div>
      <h2>constants 로 만들어진 객체 중 필요한 것만 받아오기 </h2>
      <div>
          <img src={img01} alt="설명"/>
          <img src={img02} alt="설명"/>
          <img src={img03} alt="설명"/>
          <img src={img04} alt="설명"/>
      </div>
      <h2>constants 로 만들어진 배열로 사용하기 </h2>
      <div>
          <img src={datas[0]} alt="설명"/>
          <img src={datas[1]} alt="설명"/>
          <img src={datas[2]} alt="설명"/>
          <img src={datas[3]} alt="설명"/>
      </div>
      <h2>constants 로 만들어진 배열로 컴포넌트 표현 </h2>
      <div>
          {
            datas.map((img, index)=>(
              <img src={img} alt={`img${index}`}/>
            ))
          }
      </div>
    </div>
  )
}

export default Coin