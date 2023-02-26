import { useParams } from 'react-router-dom'

function Logements({logements}) {
  const  {logementId} = useParams()

 

  return (
    <div className='sm:mx-44'>
      {logementId}     
    </div>
  )
}

export default Logements