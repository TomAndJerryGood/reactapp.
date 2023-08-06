import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import './PostLayout.css'

const PostLayout = () => {
  return (
    <div>
        <nav className='posts-box'>
            <NavLink 
                    style={ {"border" : "1px solid black"}} 
                    to='/posts'  end>posts</NavLink>
            <NavLink  
                    style={ {"border" : "1px solid black"}}
                    to='/posts/newpost'>글쓰기</NavLink>
        </nav>

        <Outlet />
    </div>
  )
}

export default PostLayout