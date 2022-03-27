import React, {useState, useEffect} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import {
    Link
} from 'react-router-dom';

const EditAuthor = (props) => {

    let history = useHistory()
    
    let [authorInfo, setAuthorInfo] = useState({})

    let {_id} = useParams();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${_id}`)
            .then(res=>{
                console.log("The response I got --> ", res)
                setAuthorInfo(res.data.results)
            })
            .catch(err=>{
                console.log("Their is an error --> ", err)
            })
    }, [_id])

    const changeHandler= (e)=>{
        // e.target.name will be the names of each input on the form input tags
        // e.target.value represents the information typed on the input
        setAuthorInfo({
            ...authorInfo,
            [e.target.name]: e.target.value
        })
    }

    const updateAuthor= (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/${_id}`, authorInfo)
            .then(res=>{
                console.log('Results for updated author --> ', res)
                history.push('/')
            })
            .catch(err=>{
                console.log("Error for updating author --> ", err)
            })
    }

    return (
        <div className='container'>
            <h3>Edit this author:</h3>
            <form onSubmit={updateAuthor}>
                <div className="input-group p-2 w-50 m-auto">
                    <span className="input-group-text" id="basic-addon1">Name</span>
                    <input type="text" className="form-control" name='authorName' value={authorInfo.authorName} onChange={changeHandler}/>
                </div>
                <input type="submit" value="Submit" className='btn btn-success'/>
                <Link to='/' className='btn btn-secondary ms-3'>Cancel</Link>
            </form>
        </div>
    );
};


export default EditAuthor;