import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {
    Link
} from 'react-router-dom';

const AllAuthors = () => {

    let [authorList, setAuthorList] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors')
            .then(res=>{
                console.log("results I got back from the api --> ", res)
                setAuthorList(res.data.results)
            })
            .catch(err=>{
                console.log("There is something wrong, error --> ", err)
            })
    }, [])

    const deleteAuthor = (authorId)=>{
        axios.delete(`http://localhost:8000/api/authors/${authorId}`)
            .then(res=>{
                console.log("Deleteing author")
                let filterList = authorList.filter((authObj)=>{
                    return authObj._id !== authorId;
                })
                setAuthorList(filterList);
            })
            .catch(err=>{
                console.log("error --> ", err)
            })
    }

    return (
        <div className='container w-50 mt-3'>
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions available</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            authorList.map((authObj, i)=>{
                                return(
                                    <tr key={authObj._id}>
                                        <td>{authObj.authorName}</td>
                                        <td>
                                            <Link className='btn btn-secondary' to={`/edit/${authObj._id}`}>Edit</Link>
                                            <button onClick={()=>{deleteAuthor(authObj._id)}} className='btn btn-danger ms-3'>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                </tbody>
            </table>
        </div>
    );
};


export default AllAuthors;