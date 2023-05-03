import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1>App Counter</h1>
      <div className="card">
        <button className="border-2 m-1" onClick={() => setCount((count) => count + 1)}>
          + {count}
        </button>
        <button className="border-2 m-1" onClick={() => setCount((count) => count - 1)}>
          -
        </button>
      </div>
    </>
  )
}

export default App
