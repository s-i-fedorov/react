import './App.css'
import Alert from "./components/Alert.jsx";

function App() {

  return (
      <>
      <header>
        <h1>My first react app</h1>
      </header>
        <Alert type="warning" text="what is love?" />
        <Alert type="danger" text="what is love?" />
      </>
  )
}

export default App
