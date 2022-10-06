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
                <form onSubmit={calulatebmi}>
                    <div>
                        <label>Weight (kg)</label>
                        <input value={weight} onChange= {(e)=>setweight(e.target.value)}>
                    </div>
                    <div>
                        <label>Height (cm)</label>
                        <input value={height} onChange=  {(e)=>setheight(e.target.value)}>
                    </div>
                    <button className="btn" type="submit">Submit</button>
                    <button className="reload" type="submit">Reload</button>
                </form>
                <div className="center">
                    <h3> Your BMI is:{bmi}</h3>

                </div>


            </div>

        </div>
      
        
    )
}