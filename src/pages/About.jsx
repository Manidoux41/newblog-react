import React from 'react'
import Banner from '../components/Banner/Banner'
import Image from '../assets/bannerImage-2.jpg';

function About({title}) {
  return (
    <div className='sm:mx-44'>
      <Banner title='' bannerImg={Image}/>
    </div>
  )
}

export default About