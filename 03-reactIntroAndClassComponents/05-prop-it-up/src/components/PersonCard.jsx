import React, {Component} from "react";

class PersonCard extends Component{

    constructor(props){
        super(props);
        this.state = {
            // crate a state variable for the likes so its nott just in a props variable (which we were not allowed to update the value up according to react)

            age: this.props.age //initialize the value of likes to be whatever value we got from props
        };

        this.ageHandler= ()=>{
            this.setState({age: this.state.age +1}) // inn order  to update state variables, we cant update it like we would a regular variable, we must use this.setState() to update state variables.
        }
    }

    render(){
        return(
            <>
                <div>
                    <h1>{this.props.firstName}, {this.props.lastName}</h1>
                    <p>Age: {this.state.age}</p>
                    <p>Hair Color: {this.props.hairColor}</p>
                    <button className="btn btn-secondary" onClick={this.ageHandler}>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
                </div>
                <hr />
            </>
        )
    }
}

export default PersonCard;