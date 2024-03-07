import './App.css'
import Progress from "./components/Progress.jsx";

function App() {
    const style = {
        width: '70%'
    }

  return (
      <>
        <header>
          <h1>My first react app</h1>
            <p>Progress bar:</p>
        </header>
          <Progress percentage={40}/>
</>
  )
}

export default App
//
//