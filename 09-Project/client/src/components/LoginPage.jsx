import React,{useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import '../App.css';
import {
    Link
} from 'react-router-dom';

const LoginPage = () => {

    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [formErrors, setFormErrors] = useState("");
    let history = useHistory();

    const login = (e)=>{
        e.preventDefault()
        let loginInfo = {email, password}
        axios.post("http://localhost:8000/api/users/login", loginInfo, {withCredentials:true})
            .then(res=>{
                console.log("response came back when loggin -->", res)
                if(res.data.error){
                    setFormErrors(res.data.error);
                }else if(res.data.userType === "Admin"){
                    history.push("/admin")
                }else{
                    history.push('/home')
                }
            })
            .catch(err=>{
                console.log("err -->", err)
            })
    }

    return (
        <body style={{height: "100vh"}}>
            <form className='form' onSubmit={login}>
                <h1 className='mb-4' style={{color: "rgb(204, 181, 150)"}}>Login</h1>
                <p className='text-danger mb-0'>{formErrors} </p>
                <div className="mb-3 col-12">
                    <input type="text" className="form-control field" placeholder="Email" style={{border: "2px solid rgb(204, 181, 150)", backgroundColor: "black"}} name="email" onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="mb-3 col-12">
                    <input type="password" className="form-control field" style={{border: "2px solid rgb(204, 181, 150)", backgroundColor: "black"}} placeholder='Password' name="password" onChange={(e)=>setPassword(e.target.value)}/>
                    <Link to="/account/forgot_password" className='float-start mt-2' style={{color: "rgb(204, 181, 150)"}}>Forgot password?</Link>
                    <input type="submit" className="btn w-100 mt-3 mb-1"  style={{backgroundColor: "rgb(204, 181, 150)", color: "white"}} value="Log In"/>
                    <div className="text-center mt-2">
                        <Link to="/account/register" style={{color: "rgb(204, 181, 150)"}}>Create new account</Link>
                    </div>
                </div>
            </form>
        </body>
    );
};

export default LoginPage;