import React, { useEffect, useState } from 'react';
import './main.css';
import { BrowserRouter } from 'react-router-dom'
import PublicRouter from './pages/PublicRouter'
import { logementData } from './datas/logements';

function App() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    const fetchdata = logementData();
    setLogements(fetchdata);
  }, []);
  
  return (
    <BrowserRouter>
        <PublicRouter logements={logements} />
    </BrowserRouter>
  )
}

export default App