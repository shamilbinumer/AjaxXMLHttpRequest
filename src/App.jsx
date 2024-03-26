import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Ajax from './component/Ajax'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Ajax/>
    </>
  )
}

export default App
