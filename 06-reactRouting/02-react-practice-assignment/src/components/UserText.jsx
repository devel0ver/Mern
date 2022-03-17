import React from "react";
import { useParams } from "react-router";

const UserText = ()=>{

    const {input, textColor, backgroundColor} = useParams();

    console.log("input ",input)
    console.log("textColor ",textColor)
    console.log("backgroundColor ",backgroundColor)

    return(
        <>
            <div className="mt-4">
                {
                isNaN(input)?
                <div style={{backgroundColor: backgroundColor, border: "5px solid black"}}>
                    <h1 style={{color: textColor, padding: "20px"}}>The word is: {input}</h1>
                </div>:
                <h1>The number is: {input}</h1>
                }
            </div>
        </>
    )
}

export default UserText;