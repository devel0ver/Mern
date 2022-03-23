import React, {useState, useEffect} from 'react';
import axios from 'axios';

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
                console.log("error --> ". err)
            })
    }, [])
    

    return (
        <div>
            {
                productList.map((productObj)=>{
                    return(
                        <div>
                            <h3>Title: {productObj.title}</h3>
                            <p>Price: ${productObj.price}</p>
                            <p>Description: {productObj.description}</p>
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    );
};


export default AllProducts;