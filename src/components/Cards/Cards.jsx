import React, { useEffect, useState } from 'react'
import { logementData } from '../../datas/logements';
import Card from './Card';


function Cards() {

 const [logements, setLogements] = useState([]);

 useEffect(() => {
    const fetchdata = logementData()
    setLogements(fetchdata)
 },[])


  return (
    <div className='bg-gray-100 my-10 py-8 rounded-2xl flex flex-wrap justify-center items-center gap-5 sm:mx-40 sm:px-10 sm:flex-row sm:justify-between sm:flex-wrap sm:py-8 sm:gap-12'>
        {
            logements.map(item => (
                <Card key={item.id} title={item.title} cover={item.cover}/>
            ))
        }
    </div>
  )
}

export default Cards