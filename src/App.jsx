import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//importar pagina
//instalar con yarn "react-router-dom"

import Pagina1 from './pages/Pagina1'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Pagina1></Pagina1>
    </div> 
  )
}

export default App
