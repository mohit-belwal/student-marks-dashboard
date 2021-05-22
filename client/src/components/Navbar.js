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
                            <NavLink className="nav-link" to="/leaderboard">View Leaderboard</NavLink>
                            </li>
                        </ul>
                    </div>
                    {/* <li class="nav-item dropdown">
                        <NavLink class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                        </NavLink>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <NavLink class="dropdown-item" to="#">Action</NavLink>
                        <NavLink class="dropdown-item" to="#">Another action</NavLink>
                        <div class="dropdown-divider"></div>
                        <NavLink class="dropdown-item" to="#">Something else here</NavLink>
                        </div>
                    </li>
                    <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form> */}
                </div>
            </nav>
        </>
    )
}

export default Navbar;