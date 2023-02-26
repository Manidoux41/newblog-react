function Banner({title}) {  
  
  return (
    <div className='h-28 rounded-2xl bg-gray-200 overflow-hidden flex justify-center items-center sm:h-56'>
      <h2 className='absolute text-black text-4xl'>{title}</h2>
    </div>
  )
}

export default Banner