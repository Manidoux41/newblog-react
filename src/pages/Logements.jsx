import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom'
import Carousel from '../components/Carousel/Carousel';
import Rank from '../components/Rank/Rank';

import Infos from '../components/Infos/Infos';
import NotFound from './NotFound';
import Tags from '../components/Tags/Tags';

function Logements({apparts}) {
  const [appart, setAppart] = useState({})
  const {logementId} = useParams()

  const oneLogement = apparts.find((item) => item.id === logementId);

  useEffect(() => {
    setAppart(oneLogement)
  }, [oneLogement])
 
  return oneLogement ? (
    <div className='sm:mx-44'>
      <Carousel picture={appart.pictures}/>
      <h1 key={appart.id}>{appart.title}</h1>
      <Infos />
      <Tags />
      <Rank />
    </div>
  ) : (
    <Navigate to="/error" replace={<NotFound />} />
  )
}

export default Logements