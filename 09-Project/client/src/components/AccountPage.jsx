import React, {useEffect, useState} from 'react';
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import '../App.css';
import {
    Link
} from 'react-router-dom';

const AccountPage = () => {

    let [loggedUserInfo, setLoggedUserInfo] = useState({});

    let history = useHistory();

    useEffect(()=>{
        axios.get("http://localhost:8000/api/users/getuser", {withCredentials:true})
            .then(res=>{
                console.log("res --> ", res)
                if(res.data.results){
                    //this means the user is logged in and can access this page
                    setLoggedUserInfo(res.data.results)
                }
            })
            .catch(err=>{
                //this means someone who is not logged in tried to access the dashboard
                history.push("/account/login")
                console.log("err --> ", err)
            })
    }, [])

    const logout = ()=>{
        axios.get("http://localhost:8000/api/users/logout", {withCredentials:true})
            .then(res=>{
                history.push('/account/login')
            })
            .catch(err=>{
                console.log("error --> ", err)
            })
    }
    
    return (
        <div>
            <div className='cont'>
                <div className='boxx'>
                    <div className='formbx'>
                        <h1 className='txth1 underline'>Account details</h1>
                        <h3 className='txth1 ms-2'>Name: {loggedUserInfo.firstName} {loggedUserInfo.lastName}</h3>
                        <h3 className='txth1 ms-2'>Email: {loggedUserInfo.email}</h3>
                        {
                            loggedUserInfo.userType === "Admin"?
                            <div>
                                <h3 className='txth1 ms-2'>UserType: {loggedUserInfo.userType}</h3>
                                <Link to='/admin' className='txt2 fs-4'>Admin Form</Link>
                            </div>: null
                        }
                        <div className='d-flex justify-content-center mt-4'>
                            <Link to='/logout' className='txt2' onClick={logout}><PersonIcon style={{fontSize: "37px", marginBottom: "8px"}}></PersonIcon><span className='fs-4'>Log out</span> </Link>
                        </div>
                    </div>
                    <div className='formbx'>
                        <h1 className='txth1 underline'>Order history</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default AccountPage;