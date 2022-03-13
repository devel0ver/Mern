import React, {useState} from "react";

const HookForm= (props)=>{

    //first name
    const [firstName, setFirstName] = useState("")
    //last name
    const [lastName, setLastName] = useState("")
    //email
    const [email, setEmail] = useState("")
    //password
    const [password, setPassword] = useState("")
    //confirm password
    const [confirmPassword, setConfirmPassword] = useState("")


    return(
    <>
    <div className="container">
        <form className="mt-5 col-6 m-auto">
            <div className="input-group">
                <label className="input-group-text" htmlFor="f_name">First Name</label>
                <input type="text" name="" id="f_name" className="form-control" onChange={(e)=>setFirstName(e.target.value)}/>
            </div>
            <div className="input-group mt-4">
                <label className="input-group-text" htmlFor="l_name">Last Name</label>
                <input type="text" name="" id="l_name" className="form-control" onChange={(e)=>setLastName(e.target.value)}/>
            </div>
            <div className="input-group mt-4">
                <label className="input-group-text" htmlFor="email">Email</label>
                <input type="email" name="" id="email" className="form-control" onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="input-group mt-4">
                <label className="input-group-text" htmlFor="password">Password</label>
                <input type="password" name="" id="password" className="form-control" onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div className="input-group mt-4">
                <label className="input-group-text" htmlFor="password">Confirm Password</label>
                <input type="password" name="" id="password" className="form-control" onChange={(e)=>setConfirmPassword(e.target.value)}/>
            </div>
        </form>
        <p className="text-center mt-3">Your form data</p>
        <p>First Name: <span className="ms-2">{firstName}</span></p>
        <p>Last Name: <span className="ms-2">{lastName}</span></p>
        <p>Email: <span className="ms-2">{email}</span></p>
        <p>Password: <span className="ms-2">{password}</span></p>
        <p>Confirm Password: <span className="ms-2">{confirmPassword}</span></p>
    </div>
    </>
    )
}

export default HookForm;
