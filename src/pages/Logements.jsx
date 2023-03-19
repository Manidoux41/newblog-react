// import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom'
// import Rank from '../components/Rank/Rank';
// import Infos from '../components/Infos/Infos';
// import Tags from '../components/Tags/Tags';
import Carousel from '../components/Carousel/Carousel'
import NotFound from './NotFound';


function Logements({apparts}) {
  const {logementId} = useParams()
  const appart = apparts.find((appart) => appart.id === logementId)
 
  return appart ? (
    <div className='sm:mx-44'>
      
      <Carousel carouselPictures={appart.pictures} />
      <h1 key={appart.id}>{appart.title}</h1>
      {/* <Infos />
      <Tags />
      <Rank /> */}
    </div>
  ) : (
    <Navigate to="/error" replace={<NotFound />} />
  )
}



export default Logements