import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const OneNinjaDetail = () => {

    const {id} = useParams();
    const [info, setInfo] = useState({});

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/ninjas/${id}`)
            .then(res=>{
                console.log("res-->", res)
                setInfo(res.data.results)
            })
            .catch(err=>{
                console.log("err-->", err)
            })
    }, [])

    return (
        <div>
            <h3>Details about {info.firstName}</h3>
            <p>Id: {id}</p>
            <p>Age: {info.age}</p>
            <p>Is veteran: <b>{info.veteran? "Veteran": "Not a Veteran"}</b></p>
            <img src={info.profilePicUrl} alt="" height="300px" width="300px"/>
        </div>
    );
};

export default OneNinjaDetail;