import React, { useState } from 'react'
// https://reactrouter.com/en/main
// npm i react-router-dom
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './routes/Login'
import './App.css'
import NotFound from './routes/NotFound'
// import { Coins, Main, Posts, Login} from './routes'
// index.js 생략
import { BrowserRouter, Routes, Route, Link, NotFound } from 'react-router-dom'
/*
// http://localhost:3000
// http://localhost:3000/coins
// http://localhost:3000/posts
*/

const App = () => {
    const [ user, setUser ] = useState(null);
    const logoutHandle = ()=>{
         setUser(null)
    }
  return (
    <BrowserRouter>
        <Header user={user} />
        <nav className='lnb'>
            <ul>
                <li><Link to="/">main</Link></li>
                <li><Link to="/coins">coins</Link></li>
                <li><Link to="/posts">게시판</Link></li>
                <li><a href="http://www.naver.com">네이버</a></li>
                <li>
                    {
                        !user 
                        ? <Link to="/login">Login</Link> 
                        // : <Link to="/">LogOut</Link> 
                        : <button onClick={logoutHandle}>LogOut</button> 
                    }
                </li>
            </ul>
        </nav>
        <Routes>
            <Route path="/"  element={ <Main /> }/>
            <Route path="/coins"  element={ <Coins /> }/>
            <Route path="/posts"  element={ <Posts /> }/>
            <Route path="/login"  element={ 
                    <Login user={user} setUser={setUser}/> 
            }/>
            <Route path="/*"  element={ <NotFound /> }/>
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default App

const Main = () => {
    return (
      <div>Main</div>
    )
  }

const Coins = () => {
    return (
      <div>Coins</div>
    )
  }

  const Posts = () => {
    return (
      <div>Posts</div>
    )
  }

  const NotFound = () => {
    return (
      <div>NotFound</div>
    )
  }