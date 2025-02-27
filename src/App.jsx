
import './App.css'
import Column from './components/Column'

function App() {


  return (
    <section className='App'>
    <Column state="PLANNED" />
    <Column state="ONGOING" />
    <Column state="DONE" />
    </section>
  )
}

export default App
