import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import {
    Link
} from 'react-router-dom';

const AuthorForm = (props) => {

    let [authorName, setAuthorName] = useState("")
    let history = useHistory()
    let [formErrors, setFormErrors] = useState({})

    const createAuthor= (e)=>{
        e.preventDefault();
        let formInfo = {authorName};
        
        axios.post('http://localhost:8000/api/authors', formInfo)
            .then(res=>{
                console.log("response --> ", res)
                if(res.data.error){
                    setFormErrors(res.data.error.errors)
                }else{
                    setAuthorName("");
                    history.push('/')
                    props.setFormSubmitted(!props.formSubmitted)
                }
            })
            .catch(err=>{
                console.log("Error --> ", err)
            })
    }

    return (
        <div className='container'>
            <h3>Add a new author:</h3>
            <form onSubmit={createAuthor}>
                <div className="input-group p-2 w-50 m-auto">
                    <span className="input-group-text" id="basic-addon1">Name</span>
                    <input type="text" className="form-control" value={authorName} onChange={(e)=>{setAuthorName(e.target.value)}}/>
                </div>
                    <p className='text-danger'>{formErrors.authorName?.message}</p>
                <input type="submit" value="Submit" className='btn btn-success'/>
                <Link to='/' className='btn btn-secondary ms-3'>Cancel</Link>
            </form>
        </div>
    );
};


export default AuthorForm;