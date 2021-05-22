import React from 'react'
import {Link} from 'react-router-dom'

const Home = () =>{
    return(
        <>
            <br></br>
            <br></br>
            <section className="container signup d-flex p-2 bg-light bd-highlight">  
                <div className="container col-auto">
                    <br></br> <br></br>
                    <h1 className="text-center"> Welcome</h1>
                    <br></br>
                    <h1 className="text-center"> This is marks submission portal</h1>
                    <br></br> <br></br>
                    <div className="text-center">
                        <Link to="/marks">
                            <button className="btn btn-primary mb-3">Enter marks</button>
                        </Link>
                    </div>
                    <br></br>
                    <div className="text-center">
                        <Link to="/leaderboard">
                            <button className="btn btn-primary mb-3">View Leaderboard</button>
                        </Link>
                    </div>
                    <br></br> <br></br> <br></br>
                    <div className="text-center">
                        <footer>    
                            Created by Mohit Belwal
                        </footer>
                    </div>
                </div>  
            </section>
        </>
    )
}

export default Home;