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
            {
                firstName.length<2 && firstName.length>0? <p className="text-danger">First name must be at least 2 characters</p> : null
            }
            <div className="input-group mt-4">
                <label className="input-group-text" htmlFor="l_name">Last Name</label>
                <input type="text" name="" id="l_name" className="form-control" onChange={(e)=>setLastName(e.target.value)}/>
            </div>
            {
                lastName.length<2 && lastName.length>0? <p className="text-danger">Last name must be at least 2 characters</p> : null
            }
            <div className="input-group mt-4">
                <label className="input-group-text" htmlFor="email">Email</label>
                <input type="email" name="" id="email" className="form-control" onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            {
                email.length<2 && email.length>0? <p className="text-danger">Email must be at least 2 characters</p> : null
            }
            <div className="input-group mt-4">
                <label className="input-group-text" htmlFor="password">Password</label>
                <input type="password" name="" id="password" className="form-control" onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            {
                password.length<8 && password.length>0? <p className="text-danger">Password must be at least 8 characters</p> : null
            }
            <div className="input-group mt-4">
                <label className="input-group-text" htmlFor="password">Confirm Password</label>
                <input type="password" name="" id="password" className="form-control" onChange={(e)=>setConfirmPassword(e.target.value)}/>
            </div>
            {
                confirmPassword!=password && confirmPassword.length>0? <p className="text-danger">Passwords must match!</p> : null
            }
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
