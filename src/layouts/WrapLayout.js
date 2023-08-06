import React from 'react'
// HOC : 리엑트의 디자인 패턴
// 컴포넌트를 파라미터로 받아서 컴포넌트를 리턴 
import './WrapLayout.css'

const WrapLayout = (Component, id, className) => function HOC(){
  return (
    <div  id={id}  className={className}>
        <Component/>
    </div>
  )
}

export default WrapLayout