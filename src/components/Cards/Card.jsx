import React from 'react'

function Card({cover, title}) {
  return (
    <div id="card" className='w-[340px] h-[340px] relative'>
        <img src={cover} alt="cover" className='w-[100%] h-[100%] object-cover'/>
        <h3 className='absolute left-2 bottom-2 z-10'>{title}</h3>
    </div>
  )
}

export default Card