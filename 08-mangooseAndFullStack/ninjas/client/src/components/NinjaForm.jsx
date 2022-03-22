import axios from 'axios';
import React, {useState} from 'react';

const NinjaForm = () => {

    let [firstName, setFirstName] = useState("")
    let [age, setAge] = useState(null)
    let [isVeteran, setIsVeteran] = useState(false)
    let [profilePicUrl, setProfilePicUrl] = useState("")
    
    const createNinja = (e)=>{
        e.preventDefault()

        //create a object to store the form info in
        let formInfo = {firstName, age, isVeteran, profilePicUrl};

        axios.post("http://localhost:8000/api/ninjas", formInfo)
            .then(res=>{
                console.log("res is this --> ", res)
            })
            .catch(err=>{
                console.log("err --> ", err)
            })
    }

    return (
        <div className='container'>
            <form onSubmit={createNinja}>
                <div className="form-group">
                    <label htmlFor="">First Name:</label>
                    <input type="text" name="" id="" className="form-control" onChange={(e)=>{setFirstName(e.target.value)}} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Age:</label>
                    <input type="number" name="" id="" className="form-control" onChange={(e)=>{setAge(e.target.value)}} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Profile Picture URL:</label>
                    <input type="text" name="" id="" className='form-control' onChange={(e)=>{setProfilePicUrl(e.target.value)}} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Is Veteran?</label>
                    <input type="checkbox" name="" id="" onChange={(e)=>{setIsVeteran(e.target.checked)}} />
                </div>
                <input type="submit" value="Create Ninja" />
            </form>
        </div>
    );
};

export default NinjaForm;