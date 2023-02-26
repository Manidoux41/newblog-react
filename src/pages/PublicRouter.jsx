import { Route, Routes } from 'react-router-dom'
import About from './About'
import Home from './Home'
import Layout from './Layout'
import Logements from './Logements'
import NotFound from './NotFound'

function PublicRouter({logements}) {


  return (
    <Routes >
      <Route element={<Layout />}>
        <Route index element={<Home apparts={logements}/>} />

        <Route path='/home' element={<Home apparts={logements}/>} />
        <Route path='/about' element={<About />} />
        <Route path='/logements/:logementId' element={<Logements apparts={logements}/>} />

        <Route path='/*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default PublicRouter