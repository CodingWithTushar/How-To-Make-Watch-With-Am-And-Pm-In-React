
import { useState } from 'react'
import './App.css'

function App() {
  
  const [Time, setTime] = useState(new Date().toLocaleTimeString())

  setInterval(()=>{
    setTime(new Date().toLocaleTimeString())
  },1000)

  return (
    <>
      <div className='flex items-center justify-center h-screen w-full bg-black text-9xl font-semibold'>
        <div className='border-2 border-white rounded-md px-96 py-96 text-white'>
          <h1>{Time}</h1>
        </div>
      </div>
    </>
  )
}

export default App
