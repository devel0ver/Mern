import React, {useState} from "react";

const HookFormOneObjectState= ()=>{
    const [fromInfo, setFormInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const changeHandler = (e)=>{
        console.log("This gives us the first name-->", e.target.name)
        setFormInfo({
            ...fromInfo,
            [e.target.name]: e.target.value
        })
    }

    return(
        <>
        <div className="container">
            <form className="mt-5 col-6 m-auto">
                <div className="input-group">
                    <label className="input-group-text" htmlFor="f_name">First Name</label>
                    <input type="text" name="firstName" id="f_name" className="form-control" onChange={changeHandler}/>
                </div>
                {
                    fromInfo.firstName.length<2 && fromInfo.firstName.length>0? <p className="text-danger">First name must be at least 2 characters</p> : null
                }
                <div className="input-group mt-4">
                    <label className="input-group-text" htmlFor="l_name">Last Name</label>
                    <input type="text" name="lastName" id="l_name" className="form-control" onChange={changeHandler}/>
                </div>
                {
                    fromInfo.lastName.length<2 && fromInfo.lastName.length>0? <p className="text-danger">Last name must be at least 2 characters</p> : null
                }
                <div className="input-group mt-4">
                    <label className="input-group-text" htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" className="form-control" onChange={changeHandler}/>
                </div>
                {
                    fromInfo.email.length<2 && fromInfo.email.length>0? <p className="text-danger">Email must be at least 2 characters</p> : null
                }
                <div className="input-group mt-4">
                    <label className="input-group-text" htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" className="form-control" onChange={changeHandler}/>
                </div>
                {
                    fromInfo.password.length<8 && fromInfo.password.length>0? <p className="text-danger">Password must be at least 8 characters</p> : null
                }
                <div className="input-group mt-4">
                    <label className="input-group-text" htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" name="confirmPassword" id="confirmPassword" className="form-control" onChange={changeHandler}/>
                </div>
                {
                    fromInfo.confirmPassword!=fromInfo.password && fromInfo.confirmPassword.length>0? <p className="text-danger">Passwords must match!</p> : null
                }
            </form>
            <p className="text-center mt-3">Your form data</p>
            <p>First Name: <span className="ms-2">{fromInfo.firstName}</span></p>
            <p>Last Name: <span className="ms-2">{fromInfo.lastName}</span></p>
            <p>Email: <span className="ms-2">{fromInfo.email}</span></p>
            <p>Password: <span className="ms-2">{fromInfo.password}</span></p>
            <p>Confirm Password: <span className="ms-2">{fromInfo.confirmPassword}</span></p>
        </div>
        </>
    )
}

export default HookFormOneObjectState;
