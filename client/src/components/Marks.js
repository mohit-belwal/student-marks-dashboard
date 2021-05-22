import React, {useState} from 'react'

const Marks = () =>{
    
    const [student, setStudent]= useState({
        rollNo: "", studentName: "", marksMaths: "", marksPhysics: "", marksChemistry: "", total: "", percentage:""
    });

    const {rollNo, studentName, marksMaths, marksPhysics, marksChemistry, total, percentage}= student;

    // For validation of input field
    const isValid=(e)=>{
        const name=e.target.name, value=e.target.value;
        if(name==="rollNo"){
            if(value&&!value.match(/^[0-9]+$/))
                return alert('Only Numbers!')
            else
                return true;
        } 

        else if(name==="studentName"){
            if(value&&!value.match(/^[a-zA-Z\s\b ]+$/))
                return alert('Only letters!');
            else 
                return true;
        } 

        else{
            if(value&&!value.match(/^[0-9]+$/))
                return alert('Invalid input!');
            else if(value&&parseInt(value)>100)
                return alert('Out of range!');
            else 
                return true;
        } 
    }

    // Taking inputs
    const handlingInputs=(e)=>{
        if(isValid(e)===true){
            if(e.target.name!=="rollNo"&&e.target.name!=="studentName"){
                let val=0;
                if(e.target.value)
                    val=parseInt(e.target.value);
                if(e.target.name==="marksMaths"){
                    if(marksPhysics)  
                    val= val+parseInt(marksPhysics);
                    if(marksChemistry)  
                    val= val+parseInt(marksChemistry);
                } 
                if(e.target.name==="marksPhysics"){
                    if(marksMaths) 
                    val= val+parseInt(marksMaths);
                    if(marksChemistry)  
                    val= val+parseInt(marksChemistry);
                }
                if(e.target.name==="marksChemistry"){
                    if(marksMaths) 
                    val= val+parseInt(marksMaths);
                    if(marksPhysics)  
                    val= val+parseInt(marksPhysics);
                }
                setStudent({ ...student, [e.target.name]: e.target.value, total:val, percentage:(val/3).toPrecision(4)+" %"});
            }
            else{
                setStudent({ ...student, [e.target.name]: e.target.value});
            }
        }
    };

    // If form is incomplete
    const isEmpty=()=>{
        for(let key in student){
            if(student[key]==="")
                return true;
        }

        return false;
    }

    //Resetting form
    const resetData=()=>{
        setStudent({ ...student, rollNo: "", studentName: "", marksMaths: "", marksPhysics: "", marksChemistry: "", total: "", percentage:""});
    }

    const submitData =async (e) => {
        if(isEmpty()===true) return alert('Incomplete form !');
        e.preventDefault();
        const res= await fetch("/marks",{
            method: "POST",
            body: JSON.stringify(student),
            headers:{"Content-Type": "application/json"}
        });

        const data= await res.json();
        if(data.status===400|| !data){
            window.alert('Unsuccessful');
        }else{
            window.alert('Data Submitted'+
                "\nStudent Name: " + data.studentName+ "\nRoll No. : " + data.rollNo + "\nMaths Marks: "+ data.marksMaths +
                "\nPhysics Marks: "+ data.marksPhysics + "\nChemistry Marks: "+ data.marksChemistry + 
                "\nTotal Marks: "+ data.total + "\nPercentage: "+ data.percentage
            );
        }

        resetData();
      };
    return(
        <>
            <br></br>
            <section className="container signup d-flex p-2 bg-light bd-highlight">
                <div className="container col-auto">
                    <form method="POST" className="row register-form" autoComplete="off">
                        <div className="col-auto">
                            <br></br>
                            <span type="text" readOnly className="form-control-plaintext" >Roll No.</span> &nbsp;
                            <span type="text" readOnly className="form-control-plaintext" >Student Name</span> &nbsp;
                            <span type="text" readOnly className="form-control-plaintext" >Marks in Maths</span> &nbsp;
                            <span type="text" readOnly className="form-control-plaintext" >Marks in Physics</span> &nbsp;
                            <span type="text" readOnly className="form-control-plaintext" >Marks in Chemistry</span> &nbsp;
                            <span type="text" readOnly className="form-control-plaintext" >Total</span> &nbsp;
                            <span type="text" readOnly className="form-control-plaintext" >Percentage</span> &nbsp;
                            <br></br>
                            <button type="reset" onClick={resetData} className="btn btn-primary mb-3">Reset</button>
                        </div>
                        <div className="col-auto">
                            <br></br>
                            <input className="form-control" type="text" name="rollNo" value={rollNo} onChange={handlingInputs} onBlur={isEmpty} placeholder="" required={true} /> &nbsp;
                            {/* {isEmpty &&<p className="text-danger">Invalid input!</p>} &nbsp;  */}
                            <input className="form-control" type="text" name="studentName" value={studentName} onChange={handlingInputs} placeholder=""/> &nbsp;
                            <input className="form-control" type="text" name="marksMaths" value={marksMaths} onChange={handlingInputs} placeholder="Marks out of 100"/> &nbsp;
                            <input className="form-control" type="text" name="marksPhysics" value={marksPhysics} onChange={handlingInputs} placeholder="Marks out of 100"/> &nbsp;
                            <input className="form-control" type="text" name="marksChemistry" value={marksChemistry} onChange={handlingInputs} placeholder="Marks out of 100"/> &nbsp;
                            <input className="form-control" readOnly type="text" name="total" defaultValue={total} placeholder="Marks out of 300"/> &nbsp;
                            <input className="form-control" readOnly type="text" name="percentage" defaultValue={percentage} placeholder="%"/> &nbsp;
                            <br></br>
                            <button type="submit" onClick={submitData} className="btn btn-primary mb-3">Submit</button>
                        </div>
                        {/* <p>{JSON.stringify(student)}</p> */}
                    </form>
                </div>
            </section>
        </>
    )
}

export default Marks;