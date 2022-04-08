import React, {useState}  from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import '../App.css';
import {
    Link
} from 'react-router-dom';

const RegisterUser = () => {

    let [firstName, setFirstName] = useState("");
    let [lastName, setLastName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [confirm, setConfirm] = useState("");

    let [formErrors, setFormErrors] = useState({});

    let history = useHistory();

    const createUser = (e)=>{
        e.preventDefault();
        let userInfo = {firstName, lastName, email, password, confirm}
        axios.post('http://localhost:8000/api/users/register', userInfo, {withCredentials:true})
            .then(res=>{
                console.log("results getting back --> ", res)
                if(res.data.errors){
                    setFormErrors(res.data.errors);
                }else{
                    history.push('/account')
                }
            })
            .catch(err=>{
                console.log("err --> ", err)
            })
    }

    return (
        <body style={{height: "100vh"}}>
            <form className='form2' onSubmit={createUser}>
                <h1 className='mb-2' style={{color: "rgb(204, 181, 150)"}}>Register</h1>
                <p className='text-danger mb-0'>{formErrors.firstName?.message} </p>
                <p className='text-danger mb-0'>{formErrors.lastName?.message} </p>
                <p className='text-danger mb-0'>{formErrors.email?.message} </p>
                <p className='text-danger mb-0'>{formErrors.password?.message}</p>
                <p className='text-danger mb-0'>{formErrors.confirm?.message}</p>
                <div className="mb-3 col-12 mt-4">
                    <input type="text" className="form-control field" placeholder="First name" style={{border: "2px solid rgb(204, 181, 150)", backgroundColor: "black"}} name="f_name" onChange={(e)=>{setFirstName(e.target.value)}}/>
                </div>
                <div className="mb-3 col-12">
                    <input type="text" className="form-control field" placeholder="Last name" style={{border: "2px solid rgb(204, 181, 150)", backgroundColor: "black"}} name="l_name" onChange={(e)=>{setLastName(e.target.value)}}/>
                </div>
                <div className="mb-3 col-12">
                    <input type="text" className="form-control field" placeholder="Email" style={{border: "2px solid rgb(204, 181, 150)", backgroundColor: "black"}} name="email" onChange={(e)=>{setEmail(e.target.value)}}/>
                </div>
                <div className="mb-3 col-12">
                    <input type="password" className="form-control field" style={{border: "2px solid rgb(204, 181, 150)", backgroundColor: "black"}} placeholder='Password' name="password" onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
                <div className="mb-3 col-12">
                    <input type="password" className="form-control field" style={{border: "2px solid rgb(204, 181, 150)", backgroundColor: "black"}} placeholder='Confirm Password' name="c_password" onChange={(e)=>{setConfirm(e.target.value)}}/>
                    <input type="submit" className="btn w-100 mt-3 mb-1"  style={{backgroundColor: "rgb(204, 181, 150)", color: "white"}} value="Create"/>
                    <div className="text-center mt-2">
                        <Link to="/account/login" style={{color: "rgb(204, 181, 150)"}}>Already have an account</Link>
                    </div>
                </div>
            </form>
        </body>
    );
};

export default RegisterUser;