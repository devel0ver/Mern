import React from "react";

const PersonCard= (props)=>{
    return<>
    <div>
        <h1>{props.firstName}, {props.lastName}</h1>
        <p>Age: {props.age}</p>
        <p>Hair Color: {props.hairColor}</p>
        {/* <button className="btn btn-secondary" onClick={this.ageHandler}>Birthday Button for {this.props.firstName} {this.props.lastName}</button> */}
    </div>
    <hr />
    </>
}

export default PersonCard;