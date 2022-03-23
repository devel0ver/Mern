import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const OneProduct = () => {
    
    const {_id} = useParams();
    const [data, setData] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${_id}`)
            .then(res=>{
                setData(res.data.results)
                console.log("response that came back to me -->", res.data.results)
            })
            .catch(err => {
                console.log("error --> ", err)
            })
    }, [])
    
    

    return (
        <div className='mt-5'>
            <h2>{data.title}</h2>
            <p>Price: ${data.price}</p>
            <p>Description: {data.description}</p>
        </div>
    );
};


export default OneProduct;