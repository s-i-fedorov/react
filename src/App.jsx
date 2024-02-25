import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
         <h1>My first react app</h1>
      </header>
        <main className="container">
            <nav className="sidebar">There is a sidebar
                <button>some button</button>
                <button>some button</button>
                <button>some button</button>
                <button>some button</button>
            </nav>
            <section className="content">Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Dicta laborum necessitatibus nulla quasi ullam?
                Ad assumenda beatae doloremque maiores minima numquam quasi quisquam
                saepe sed, sunt suscipit veritatis vero voluptas.Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Dicta laborum necessitatibus nulla quasi ullam?
                Ad assumenda beatae doloremque maiores minima numquam quasi quisquam
                saepe sed, sunt suscipit veritatis vero voluptas.Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Dicta laborum necessitatibus nulla quasi ullam?
                Ad assumenda beatae doloremque maiores minima numquam quasi quisquam
                saepe sed, sunt suscipit veritatis vero voluptas.Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Dicta laborum necessitatibus nulla quasi ullam?
                Ad assumenda beatae doloremque maiores minima numquam quasi quisquam
                saepe sed, sunt suscipit veritatis vero voluptas.Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Dicta laborum necessitatibus nulla quasi ullam?
                Ad assumenda beatae doloremque maiores minima numquam quasi quisquam
                saepe sed, sunt suscipit veritatis vero voluptas.</section>
        </main>

    </>
  )
}

export default App
