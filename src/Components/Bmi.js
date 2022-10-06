import {useState} from "react"

function BmiCalculator () {
    const [weight,setweight]=useState(0);
    const [height,setheight]=useState(0); 
    const [bmi,setbmi]=useState("");
    const [message,setmessage]=useState("");
    return (
        <div className="bmi">
            <div className="container">
                <h2 className="center">BMI Calculator</h2>

            </div>

        </div>
      
        
    )
}