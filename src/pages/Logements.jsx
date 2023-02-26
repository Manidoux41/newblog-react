import React from 'react'
import { useParams } from 'react-router-dom'

function Logements() {
  const { id } = useParams()
  return (
    <div className='sm:mx-44'>Logements {id}</div>
  )
}

export default Logements