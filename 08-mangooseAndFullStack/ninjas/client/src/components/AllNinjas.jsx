import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
    Link 
} from "react-router-dom";

const AllNinjas = () => {

    //state var to store all ninjas in
    const [ninjaList, setNinjaList] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:8000/api/ninjas")
            .then(res=>{
                console.log("response is this --> ", res)
                setNinjaList(res.data.results)
            })
            .catch(err=>{
                console.log("errr", err)
            })
    }, [])

    return (
        <div className='container'>
            <h2>All the ninjas below</h2>
            {
                ninjaList.map((ninjaObj)=>{
                    return(
                        <div>
                            <div className="card" key={ninjaObj._id}>
                                <img className="card-img-top" src="/images/pathToYourImage.png" alt="Card image cap"/>
                                <div className="card-body">
                                    <h4 className="card-title"><Link to={`/details/${ninjaObj._id}`}>{ninjaObj.firstName}</Link></h4>
                                    <p className="card-text">
                                        Age: {ninjaObj.age}
                                    </p>
                                    <img src={ninjaObj.profilePicUrl} alt="" height="300px" width="300px"/>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};


export default AllNinjas;