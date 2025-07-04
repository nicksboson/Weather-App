import { useState } from 'react'
import Searchbar from './Searhbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Searchbar/>
    </>
  )
}

export default App
