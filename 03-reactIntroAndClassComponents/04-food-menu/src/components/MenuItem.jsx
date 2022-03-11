import React, {Component} from "react"; //import react and component so that we can use those to create a class based 

class MenuItem extends Component {
    render(){
        return(
            <>
            <div>
                <h3>{this.props.dishName}</h3>
                <p>Price: ${this.props.price}</p>
                <p>Number of likes: {this.props.likes}</p>
                <p>Description: Its deep fried in basil oil and basil leaves and all that. Its nice.</p>
                <hr />
            </div>
            </>
        )
    }
}

export default MenuItem