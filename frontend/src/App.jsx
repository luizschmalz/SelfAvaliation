import { Link, Outlet } from "react-router-dom"
import './App.css'

function App() {



  return (
    <div className="App">
        <h1 className="title">Auto Avaliação</h1>
        <div className='buttons'>
          <Link to={`/avaliation`} className="button">Auto-avaliação</Link>
          <Link to={`/manager`} className="button">Manager</Link>
        </div>
        <Outlet />
    </div >
  )
}

export default App
