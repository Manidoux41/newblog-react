import './main.css';
import { BrowserRouter } from 'react-router-dom'
import PublicRouter from './pages/PublicRouter'

function App() {
  
  
  return (
    <BrowserRouter>
        <PublicRouter />
    </BrowserRouter>
  )
}

export default App