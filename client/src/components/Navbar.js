import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {NavLink} from 'react-router-dom'

const Navbar = () =>{
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">Home</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                            <NavLink className="nav-link" to="/marks">Enter Marks</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to="/leader-board">View Leaderboard</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
