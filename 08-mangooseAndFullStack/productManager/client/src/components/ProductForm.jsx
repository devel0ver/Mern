import React, {useState} from 'react';
import axios from 'axios';

const ProductForm = () => {

    let [title, setTitle] = useState("")
    let [price, setPrice] = useState(null)
    let [description, setDescription] = useState("")

    const createProduct = (e) => {
        e.preventDefault()
        //create an object to store form info in
        let formInfo = {title, price, description}
        axios.post('http://localhost:8000/api/products', formInfo)
            .then(res=>{
                console.log("response --> ", res)
                
            })
            .catch(err=>{
                console.log("error --> ", err)
            })
    }
    


    return (
        <div>
            <form className='m-auto col-4' onSubmit={createProduct}>
                <div className="input-group mb-3 p-2">
                    <span className="input-group-text" id="basic-addon1">Title</span>
                    <input type="text" className="form-control" onChange={(e)=>{setTitle(e.target.value)}}/>
                </div>
                <div className="input-group mb-3 p-2 w-50">
                    <span className="input-group-text" id="basic-addon1">Price</span>
                    <input type="number" step={"0.01"} className="form-control" onChange={(e)=>{setPrice(e.target.value)}}/>
                </div>
                <div className="input-group mb-3 p-2">
                    <span className="input-group-text" id="basic-addon1">Description</span>
                    <textarea className="form-control" rows={"1"} onChange={(e)=>{setDescription(e.target.value)}}/>
                </div>
                <input type="submit" value="create" className='btn btn-secondary w-50' />
            </form>
        </div>
    );
};


export default ProductForm;