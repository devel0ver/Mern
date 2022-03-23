import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
    Link
} from 'react-router-dom';

const AllProducts = () => {

    //state variable to store all products in
    const [productList, setProductList] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                console.log('response --> ', res)
                setProductList(res.data.results)
            }) 
            .catch(err=>{
                console.log("error --> ", err)
            })
    }, [])
    

    return (
        <div>
            <h1>All Products:</h1>
            {
                productList.map((productObj)=>{
                    return(
                        <div key={productObj._id}>
                            <h3><Link to={`/api/products/${productObj._id}`}>{productObj.title}</Link></h3>
                        </div>
                    )
                })
            }
        </div>
    );
};


export default AllProducts;