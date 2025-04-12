import { Link, Outlet } from "react-router-dom"

function App() {



  return (
    <>
        <h1>Auto Avaliação</h1>
        <div>
          <Link to={`/avaliation`} className="detailBtn">Auto-avaliação</Link>
          <Link to={`/manager`} className="detailBtn">Manager</Link>
        </div>
    </>
  )
}

export default App
