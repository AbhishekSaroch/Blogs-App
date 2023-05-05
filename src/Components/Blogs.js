import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../Context/AppContext';

const Blogs = () => {
  const {loading}=useContext(AppContext);
  const {posts}=useContext(AppContext);
  console.log("Priniting")
  console.log(posts);


  return (
    <div className='w-11/12 max-w-[650px] py-8 flex flex-col gap-5 mt-[64px] mb-[64px]'>
      {
        loading ? (<div className='text-4xl flex items-center justify-center font-bold mx-auto'>Loading......</div>) : (
          posts.length>0 ? (<div >
            {
              posts.map((post)=>(
                <div key={post.id} >
                  <p className ='font-bold text-lg mt-[6px]'>{post.title}</p>
                  <p className='text-[15px] font-semibold'>by <span className='italic'>{post.author}</span> on <span className='underline font-bold'>{post.category}</span></p>
                  <p className='text-[15px]'>Posted On {post.date}</p>
                  <p className='text-[15px] mt-[10px]'>{post.content}</p>
                  <div className='flex'>{
                    post.tags.map((tag,index)=>{
                      return <span key={index} className='text-blue-500 underline font-bold text-xs mt-[5px]'>{`#${tag}`}</span>
                    })
                    }</div>
                </div>
              ))
            }
          </div>) : (<div>No Data Found Guys</div>)
        )
      }
    </div>
  )
}


export default Blogs