import { useEffect, useState } from 'react'
import Banner from '../components/Banner/Banner'
import Cards from '../components/Cards/Cards'

function Home() {
  const [bannerTitle, setBannerTitle] = useState('')
  useEffect(() => {
    setBannerTitle('Chez vous, partout et ailleurs')
  }, [])

  return (
    <div className='sm:mx-44'>
      <Banner title={bannerTitle}/>
      <Cards />
    </div>
  )
}

export default Home