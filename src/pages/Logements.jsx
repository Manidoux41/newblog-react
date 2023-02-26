import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom'
import NotFound from './NotFound';

function Logements({apparts}) {
  const [appart, setAppart] = useState({})
  const {logementId} = useParams()

  const oneLogement = apparts.find((item) => item.id === logementId);

  useEffect(() => {
    setAppart(oneLogement)
  }, [oneLogement])
 
  return oneLogement ? (
    <div className='sm:mx-44'>
      <h1 key={appart.id}>{appart.title}</h1>     
    </div>
  ) : (
    <Navigate to="/error" replace={<NotFound />} />
  )
}

export default Logements