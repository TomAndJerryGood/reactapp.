import React, {useState, useEffect } from 'react'
import './Posts.css'
import { Link }  from 'react-router-dom'
import { useContext } from 'react'
import { DataContext} from '../contexts/DataContext';

const Posts = () => {
  const  {
      setSearch, 
      searchPosts,
      isPostsLoading 
  } = useContext(DataContext)

  return (
    <div>
      {
        isPostsLoading ?  <div>Loading...</div> 
        : <form  className='search'
                  onSubmit={ e=>e.preventDefault() }>
          <input type="text" 
                  id="search" 
                  onChange={ (e)=>setSearch(e.target.value) }
                  autoComplete='off'
                  placeholder='검색어를 입력하세요.'
          />
        </form>
      }
      {
        searchPosts.length &&  <ul className='center-posts'>
            {
              searchPosts.map(post=>(
                <li
                
                key={post.datetime}>
                  <span className='id'>id : { post.id}</span>
                  <div class="border-radius border">
                    <Link to={`/posts/${post.id}`}>
                        <span className='lead-posts'>{ post.title}</span>
                    </Link>
                    <span className='posts border'>{ post.body}</span>
                  </div>
                  <span className='id'>{ post.datetime}</span>
                </li>
              ))
            }
        </ul>
      }
    </div>
  )
}

export default Posts