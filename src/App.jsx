import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ClassicSticky from './catalog/navbar/ClassicSticky'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full h-screen bg-zinc-500'>
          <ClassicSticky color='green' />
      </div>
    </>
  )
}

export default App
