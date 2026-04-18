import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h1>Header</h1>
      </header>
      <main>
        <h1>Main Content</h1>
      </main>
      <footer>
        <h1>Footer</h1>
      </footer>
    </>
  )
}

export default App
