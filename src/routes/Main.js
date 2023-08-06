import React, {useState} from 'react'
import './Main.css'
// 세로로 긴 페이지 : fullpage
import {
  Main01,
  Main02,
  Main03,
  Main04
} from '../components/mains'

import DotLayout from '../layouts/DotLayout'
const Main = () => {
  const [ isActive, setIsActive ] = useState("main01");

  return (
    <div>
      <DotLayout isActive={isActive} setIsActive={setIsActive}/>
      <Main01 />
      <Main02 />
      <Main03 />
      <Main04 />
    </div>
  )
}

export default Main