import Card from './components/Card.jsx'

function App() {
  return (
    <>
      <header>
         <h1>My first react app</h1>
      </header>
        <main className="container">
            <Card  title={'dear friend!'}/>
            <Card text={'how is your health?'}/>
            <Card
                title={'dear friend!'}
                text={'how is your health?'}/>
        </main>

    </>
  )
}

export default App
