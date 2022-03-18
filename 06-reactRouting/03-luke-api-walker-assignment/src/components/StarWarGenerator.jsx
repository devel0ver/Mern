import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';

const StarWarGenerator = () => {

    const history = useHistory();

    let [resource, setRecource] = useState("films")
    let [id, setId] = useState(null)

    const getStarWarFromAPI = (e)=>{
        e.preventDefault();
        history.push(`/${resource}/${id}`)
        
    }
    
    return (
        <div>
            <form onSubmit={getStarWarFromAPI}>
                <div className="d-flex justify-content-center mt-5">
                    <div className='d-flex h-50 me-5'>
                        <label className='input-group-text' htmlFor="">Search for:</label>
                        <select name="" id="" className='form-control col-4' onChange={(e)=>setRecource(e.target.value)}>
                            <option value="films">films</option>
                            <option value="people">people</option>
                            <option value="planets">planets</option>
                            <option value="species">species</option>
                            <option value="starships">starships</option>
                            <option value="vehicles">vehicles</option>
                        </select>
                    </div>
                    <div className='d-flex' style={{marginLeft: "100px"}}>
                        <label className='input-group-text' htmlFor="">ID: </label>
                        <input type="number" name="" className='form-control' style={{width: "100px"}} onChange={(e)=>setId(e.target.value)} />
                    </div>
                    <input type="submit" value="Search" className='btn btn-primary ms-3' />
                </div>
            </form>
        </div>
    );
};

export default StarWarGenerator;