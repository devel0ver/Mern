import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
    Link
} from 'react-router-dom';

const AllProducts = (props) => {

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
    }, [props.formSubmitted])
    
    const deleteProduct = (productId)=>{
        // setProductList(productList.filter(productObj => productObj._id != productId));
        
        axios.delete(`http://localhost:8000/api/products/${productId}`)
            .then(res=>{
                console.log("the res is deleting successfully")
                let filterList = productList.filter((productObj)=>{
                    return productObj._id != productId  //return back only the products whose id is not equal to the id of the products we want to delete.
                })
                setProductList(filterList);
            })
            .catch(err=>{
                console.log("error --> ",err)
            })
    }

    return (
        <div>
            <h1>All Products:</h1>
            {
                productList.map((productObj)=>{
                    return(
                        <div key={productObj._id}>
                            <h3><Link to={`/products/${productObj._id}`}>{productObj.title}</Link></h3>
                            <Link className='btn btn-secondary m-3' to={`/edit/${productObj._id}`}>Edit {productObj.title}</Link>
                            <button onClick={()=>{deleteProduct(productObj._id)}} className='btn btn-danger m-3'>Delete</button>
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    );
};


export default AllProducts;