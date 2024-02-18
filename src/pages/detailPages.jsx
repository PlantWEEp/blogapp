import React from 'react'  
import Index from '../components/detailPages'

function DetailPages() {
  return (
    <>
    <div className=" bg-[url('https://images.unsplash.com/photo-1610817201767-793a9130ce07?q=80&w=1962&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] w-full bg-cover bg-center bg-no-repeat h-[256px] relative z-0">
    <span className='absolute w-ful h-full bg-[#00000071] z-[-1] inset-0'></span>
    <div className='container flex flex-col align-center h-full justify-center'>
      <h3 className='text-custom-h3 font-bold text-skin-white'>Varkala Travelcase</h3>
      <p className='font-bold text-skin-white'>Posted on 12/02/2024</p>
    </div>
    <Index/>
    </div>
    </>
  )
}

export default DetailPages