import React, {useState} from "react";

const BoxGenerator = ()=>{

    //create state variables to store info collected from each form input
    let [color, setColor] = useState("")

    //state variable to store all the submitted user objects
    let [userList, setUserList] = useState([]);

    const submitHandler = (e)=>{
        e.preventDefault();
        let newUserObj = {color}

        setColor("")

        setUserList([...userList, newUserObj])
    }


    return(
        <>
        <form className="col-6 m-auto" onSubmit={submitHandler}>
            <div className="input-group">
                <label className="input-group-text bg-white fs-3 me-3 border-0" htmlFor="color">Color</label>
                <input type="text" name="" id="color" className="form-control" onChange={(e)=>{setColor(e.target.value)}}/>
                <input type="submit" value="Add" className="btn btn-light ms-3" style={{width:"100px", borderRadius:"5px"}} />
            </div>
            <div className="row g-3">
            {
                userList.map( user => {
                    return(
                        <div className="col-3">
                            <div style={{backgroundColor: user.color, width: "150px", height: "150px"}} className="mt-5"></div>
                        </div>
                    ) 
                })
            }
            </div>
        </form>
        </>
    )
}

export default BoxGenerator;