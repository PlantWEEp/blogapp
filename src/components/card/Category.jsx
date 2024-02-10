import React from 'react'

function Category() {

  const touristCategory = [
    "Eiffel Tower",
    "Machu Picchu  ",
    "Taj Mahal ", 
    "Great Wall of China",
    "Pyramids of Giza ",
    "Statue of Liberty ", 
  ]; 
  return (
    <>
      <div className='text-skin-textwhite bg-skin-transparent p-[20px] rounded-[14px] max-h-[225px]'> 
      <h4 className='mb-5'>Category by loaction</h4>
      <div className=' flex flex-wrap gap-3'>
        {touristCategory.map((category,index)=>{
          return <div key={index} className='bg-skin-green py-2 px-4 rounded-full text-custom-p'>{category}</div>
        })} 
      </div>
      </div>
    </>
  )
}

export default Category