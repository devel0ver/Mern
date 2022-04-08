import React, {useEffect, useState} from 'react';
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import '../App.css';
import {
    Link
} from 'react-router-dom';

const Admin = () => {

    let [loggedUserInfo, setLoggedUserInfo] = useState({});

    let history = useHistory();

    useEffect(()=>{
        axios.get("http://localhost:8000/api/users/getuser", {withCredentials:true})
            .then(res=>{
                console.log("res --> ", res)
                if(res.data.results){
                    //this means the user is logged in and can access this page
                    setLoggedUserInfo(res.data.results)
                    if(res.data.results.userType === "basic") {
                        history.push('/home')
                    };
                }
            })
            .catch(err=>{
                //this means someone who is not logged in tried to access the dashboard
                history.push("/account/login")
                console.log("err --> ", err)
            })
    }, [])

    return (
        <div>
            <form className='form3'>
                <h1 className='mb-2' style={{color: "rgb(204, 181, 150)"}}>Post Products</h1>
                <div className="mb-3 col-12 mt-4">
                    <label htmlFor="" className='txtColor'>Product Name:</label>
                    <input type="text" className="form-control field" placeholder="Product name" style={{border: "2px solid rgb(204, 181, 150)", backgroundColor: "black"}} name="p_name"/>
                </div>
                <div className="mb-2 col-12">
                    <label htmlFor="" className='txtColor'>Product Price:</label>
                    <input type="number" step='0.01' className="form-control field" placeholder="Product price" style={{border: "2px solid rgb(204, 181, 150)", backgroundColor: "black"}} name="p_price"/>
                </div>
                <div className="mb-2 col-12">
                    <label htmlFor="" className='txtColor'>Product Color:</label>
                    <input type="text" className="form-control field" placeholder="Product color" style={{border: "2px solid rgb(204, 181, 150)", backgroundColor: "black"}} name="p_color"/>
                </div>
                <div className="mb-2 col-12">
                    <label htmlFor="" className='txtColor'>Product Size:</label>
                    <input type="number" className="form-control field" placeholder="Product size" style={{border: "2px solid rgb(204, 181, 150)", backgroundColor: "black"}} name="p_size"/>
                </div>
                <label htmlFor="" className='txtColor'>Product Category:</label>
                <div className="mb-2 col-12">
                    <select name="" className='field' style={{width: "100%", border: "2px solid rgb(204, 181, 150)"}} type="text" id="">
                        <option value="" disabled>Women's Clothing</option>
                        <hr />
                        <option value="">Satin dresses</option>
                        <option value="">Abayas</option>
                        <option value="">Cardigins</option>
                        <hr />
                        <option value="" disabled>Accessories</option>
                        <option value="">Prayer Mats</option>
                        <hr />
                        <option value="" disabled>Hijabs</option>
                        <option value="">Chiffon Classics</option>
                    </select>
                </div>
                <div className="mb-2 col-12">
                    <label htmlFor="" className='txtColor'>Product Description:</label>
                    <input type="text" className="form-control field" style={{border: "2px solid rgb(204, 181, 150)", backgroundColor: "black"}} placeholder='Description' name="description"/>
                    <div className="input-group">
                        <input type="file" class="form-control" id="inputGroupFile02" hidden/>
                        <label className='file' for="inputGroupFile02">Choose File</label>
                    </div>
                </div>
                <input type="submit" className="btn w-75 mb-1"  style={{backgroundColor: "rgb(204, 181, 150)", color: "white"}} value="Upload Product"/>
            </form>
        </div>
    );
};

export default Admin;