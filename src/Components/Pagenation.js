import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const Pagenation = () => {
  const {page,handelpagechange,totalpages}=useContext(AppContext);
  return (
    <div className='w-full fixed bottom-0 bg-white h-[55px] flex justify-center items-center '>
      <div className='flex items-center justify-center gap-x-17'>
      {
        page > 1 &&
       ( <button className='rounded-md border px-3 py-1' onClick={()=>handelpagechange(page-1)}>Previous</button>)
      }
      {
        page<totalpages &&
        (<button  className='rounded-md border px-3 py-1'onClick={()=>  handelpagechange(page+1)}>Next</button>)
      }
        <p className=' px-2 py-1 font-bold text-sm'>Page {page} of {totalpages}</p>
      </div>
    
      
    </div>
  )
}

export default Pagenation