import React, {useState} from 'react';
import axios from 'axios';

const ProductForm = (props) => {

    let [title, setTitle] = useState("")
    let [price, setPrice] = useState(undefined)
    let [description, setDescription] = useState("")

    let [formErrors, setFormErrors] = useState({})

    const createProduct = (e) => {
        e.preventDefault()
        //create an object to store form info in
        let formInfo = {title, price, description}
        axios.post('http://localhost:8000/api/products', formInfo)
            .then(res=>{
                console.log("response for the form --> ", res)
                if(res.data.error){ //if the form is filled out improperly, we will have a key called "errror" in res.data
                    setFormErrors(res.data.error.errors)
                }else { // If form is filled out properly
                    props.setFormSubmitted(!props.formSubmitted)

                    //clear the form info -> first clear out the state variables
                    setTitle("")
                    setPrice(undefined)
                    setDescription("")
                }
                
            })
            .catch(err=>{
                console.log("error --> ", err)
            })
    }
    


    return (
        <div>
            <form className='m-auto col-4' onSubmit={createProduct}>
                <div className="input-group p-2">
                    <span className="input-group-text" id="basic-addon1">Title</span>
                    <input type="text" className="form-control" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
                </div>
                    <p className="text-danger">{formErrors.title?.message}</p>
                <div className="input-group p-2 w-50">
                    <span className="input-group-text" id="basic-addon1">Price</span>
                    <input type="number" step={"0.01"} className="form-control" value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
                </div>
                    <p className="text-danger float-start ms-5">{formErrors.price?.message}</p>
                <div className="input-group p-2">
                    <span className="input-group-text" id="basic-addon1">Description</span>
                    <textarea className="form-control" rows={"1"} value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
                </div>
                    <p className="text-danger">{formErrors.description?.message}</p>
                <input type="submit" value="create" className='btn btn-secondary w-50' />
            </form>
        </div>
    );
};


export default ProductForm;