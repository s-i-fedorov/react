import './App.css'
import Progress from "./components/Progress.jsx";

function App() {

  return (
      <>
        <header>
          <h1>My first react app</h1>
        </header>
          <Progress  className='progress-bar'
                     role='progressbar' aria-valuenow='40' aria-valuemin='0'
                     aria-valuemax='100' aria-label='progressbar' style={width} />;
</>
  )
}

export default App
//
//