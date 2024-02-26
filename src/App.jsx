import Card from './components/Card.jsx'

function App() {

  return (
    <>
      <header>
         <h1>My first react app</h1>
      </header>
        <main className="container">
            <Card  title={'hi my dear friend!'}/>
            <Card text={'how are you?'}/>
            <Card
                title={'hi my dear friend!'}
                text={'how are you?'}/>
        </main>

    </>
  )
}

export default App
