import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {NavLink} from 'react-router-dom'

const Leaderboard = () =>{

    // For getting response in students
    const [students, setStudents]= useState([]);
    // For searching 
    const[searchValue, setSearchValue]= useState("");
    // For sorting
    const[sortBy, setSortBy]= useState("total");

    useEffect(()=>{
        fetch(`https://marks-dashboard.herokuapp.com/leaderboard/?sortBy=`+sortBy).then((result)=>{
        result.json().then((res)=>{
        setStudents(res.students);
    })
    })})

    // Sorting according to the input option
    const sortFunction=(e)=>{
        if(e.target.value==="Percentage")
        setSortBy("total");
        else
        setSortBy(e.target.value);
    }
    
    // Filtering table according to the search
    const studentFilter= students.filter((item)=>{
        if(searchValue===""){
            return item;
        } else if(item.rollNo.toString().includes(searchValue.toString())) {
            return item;
        }else{
            return item.studentName.toLowerCase().includes(searchValue.toLowerCase());
        }
    })

    
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
                          <NavLink className="nav-link" to="/leade-rboard">View Leaderboard</NavLink>
                          </li>
                          <li className="nav-item">
                          <NavLink className="nav-link" to="#">Sort By</NavLink>
                          </li>
                          <select class="custom-select" value={sortBy} onChange={sortFunction}>
                            <option value="Percentage">Percentage</option>
                            <option value="studentName">Student Name</option>
                            <option value="rollNo">Roll No.</option>
                            <option value="marksMaths">Maths Marks</option>
                            <option value="marksPhysics">Physics Marks</option>
                            <option value="marksChemistry">Chemistry Marks</option>
                          </select>
                      </ul>
                  </div>
              </div>
              <input class="form-control my-2 my-lg-0" type="search" onChange={(e)=>{
                setSearchValue(e.target.value)
              }} placeholder="Search..." aria-label="Search"/>
          </nav>

          {/* Leaderboard table */}
          <div>
            <table  class="table table-hover table-bordered">
              <thead>
                  <tr>
                  <th className="text-center" scope="col">#</th>
                  <th className="text-center" scope="col">Roll No.</th>
                  <th className="text-center" scope="col">Name</th>
                  <th className="text-center" scope="col">Maths Marks</th>
                  <th className="text-center" scope="col">Physics Marks</th>
                  <th className="text-center" scope="col">Chemistry Marks</th>
                  <th className="text-center" scope="col">Total Marks</th>
                  <th className="text-center" scope="col">Percentage</th>
                  </tr>
              </thead>
              <tbody>
              {
                  studentFilter.map((item,i)=>
                  <tr className="text-center" key={i}>
                  <th scope="row">{i+1}</th>
                      <td className="text-center" >{item.rollNo}</td>
                      <td className="text-center" >{item.studentName}</td>
                      <td className="text-center" >{item.marksMaths}</td>
                      <td className="text-center" >{item.marksPhysics}</td>
                      <td className="text-center" >{item.marksChemistry}</td>
                      <td className="text-center" >{item.total}</td>
                      <td className="text-center" >{item.percentage}</td>
                  </tr>)
              }
              </tbody>
            </table>
          </div>
      </>
    )
}

export default Leaderboard;
