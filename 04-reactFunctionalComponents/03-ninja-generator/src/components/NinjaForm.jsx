import React, {useState} from "react";

const NinjaForm = ()=>{

    //create state variables to store info collected from each form input
    let [name, setName] = useState("");
    let [profilePicUrl, setProfilePicUrl] = useState("");
    let [favColor, setFavColor] = useState("");
    let [favLang, setFavLang] = useState("");
    
    //state variable to store all the submitted ninja objects inside
    let [ninjaList, setNinjaList] = useState([])

    const submitHandler = (e)=>{
        e.preventDefault(); //prevents the form from reloading the whole page
        console.log({name, profilePicUrl, favColor, favLang})
        let newNinjaObj = {name, profilePicUrl, favColor, favLang}  //create a ninja object using the info from form
    
        //clear out the state variables whic will clear out the form inputs if I assign the form values to be the state variables
        setName("")
        setProfilePicUrl("")
        setFavColor("")
        setFavLang("JS")    //set the ninjaList variable using the setter (setNinjaList()) to contain a copy of whatever is currently already in the ninja list (...ninjaList) and add the new ninja object to the end of that list (, newNinjaObj);

        //add the ninja object to the ninjaList array
        // ninjaList.push(newNinjaObj) //this happened to work, but is not 

        setNinjaList([...ninjaList, newNinjaObj])
    }

    return (
        <>
        <form onSubmit = {submitHandler}>
            <div className="form-group">
                <label htmlFor="">Name:</label>
                <input type="text" name="" id="" className="form-control" onChange={(e)=>{setName(e.target.value)}} value={name} />
            </div>
            <div className="form-group">
                <label htmlFor="">Profile Picture Link:</label>
                <input type="text" name="" id="" className="form-control" onChange={(e)=>{setProfilePicUrl(e.target.value)}} value={profilePicUrl}/>
            </div>
            <div className="form-group">
                <label htmlFor="">Favorite Color:</label>
                <input type="text" name="" id="" className="form-control" onChange={(e)=>{setFavColor(e.target.value)}} value={favColor} />
            </div>
            <div className="form-group">
                <label htmlFor="">Favorite Language:</label>
                <select name="" id="" className="form-select" onChange={(e)=>{setFavLang(e.target.value)}} value={favLang} >
                    <option value="Python">Python</option>
                    <option value="JS">JS</option>
                    <option value="Java">Java</option>
                    <option value="C#">C#</option>
                </select>
            </div>
            <input type="submit" value="Add Ninja!" className="btn btn-success mt-3" />

        </form>
            {
                ninjaList.map( ninja => {
                    return <div className="mt-3" style={{backgroundColor: ninja.favColor}}>
                        <h1>{ninja.name}</h1>
                        <p>Favorite Color: {ninja.favColor}</p>
                        <p>Favorite Language: {ninja.favLang}</p>
                        <p><img src={ninja.profilePicUrl} alt="" height="200px" width="200px" /></p>
                        <hr />
                    </div>
                })
            }
        </>
    )
}

export default NinjaForm;