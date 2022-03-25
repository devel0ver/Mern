import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const EditProductForm = (props) => {

    let [productInfo, setProductInfo] = useState({})

    let {_id} = useParams();

    const history = useHistory();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${_id}`)
            .then(res=>{
                console.log("The respones I got back --> ", res)
                setProductInfo(res.data.results)
            })
            .catch(err=>{
                console.log("Something wrong has happened. Error --> ", err)
            })
    }, [])

    const changehandler = (e)=>{
        //e.target.name will be the named of each input on the form input tags
        //e.target.value represents the information typed on the input
        setProductInfo({
            ...productInfo,
            [e.target.name]: e.target.value
        })
    }

    const updateProduct = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/products/${_id}`, productInfo)
            .then(res=>{
                console.log("response im getting for update --> ", res)
                history.push('/')
            })
            .catch(err=>{
                console.log("Error im getting for update --> ", err)
            })
    }
    


    return (
        <div>
            <p>Editing product</p>
            <form className='m-auto col-4' onSubmit={updateProduct}>
                <div className="input-group p-2">
                    <span className="input-group-text" id="basic-addon1">Title</span>
                    <input type="text" name='title' className="form-control" value={productInfo.title} onChange={changehandler}/>
                </div>
                <div className="input-group p-2 w-50">
                    <span className="input-group-text" id="basic-addon1">Price</span>
                    <input type="number" step={"0.01"} name='price' className="form-control" value={productInfo.price} onChange={changehandler}/>
                </div>
                <div className="input-group p-2">
                    <span className="input-group-text" id="basic-addon1">Description</span>
                    <textarea className="form-control" name='description' rows={"1"} value={productInfo.description} onChange={changehandler}/>
                </div>
                <input type="submit" value="Update product" className='btn btn-secondary w-50' />
            </form>
        </div>
    );
};


export default EditProductForm;