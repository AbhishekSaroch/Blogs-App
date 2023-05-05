import React from 'react'
import Header from"./Components/Header"
import Blogs from "./Components/Blogs"
import Pagenation from "./Components/Pagenation"
import { useContext } from 'react'
import { useEffect } from 'react'
import { AppContext } from './Context/AppContext'
import "./App.css"
const App = () => {

  const {fetchBlogPosts}=useContext(AppContext);

  useEffect(()=>{
   fetchBlogPosts();
  },[]);
  return (
    <div className='w-full h-full flex flex-col  flex-wrap overflow-hidden gap-y-1 justify-center items-center'>
      <Header/>
      <Blogs />
      <Pagenation/>
    </div>
  )
}

export default App