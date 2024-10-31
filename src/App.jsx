import React, {Suspense} from "react";
import {BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom";

const Home = React.lazy(() => import("./assets/components/Home"))
const FilmList = React.lazy(() => import("./assets/components/Film/List"))
const FilmCreate = React.lazy(() => import("./assets/components/Film/Create"))

function App() {
  return (
    <Router>
      {/* navbar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">MDP</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className={({isActive}) => 'nav-link ${isActive ? "active" : "" }'} aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({isActive}) => 'nav-link ${isActive ? "active" : "" }'} aria-current="page" to="/film">film</NavLink>
              </li>
              <li className="nav-item">
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">      
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/film" element={<FilmList />} />
          <Route path="/film/create" element={<FilmCreate />} />
        </Routes>
      </Suspense>

      <div>&copy; 2024 Mahasiswa</div>
      </div>
    </Router>
  )
}

export default App
