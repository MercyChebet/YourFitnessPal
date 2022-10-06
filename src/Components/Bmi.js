import {useState} from "react"

function BmiCalculator () {
    const [weight,setweight]=useState(0);
    const [height,setheight]=useState(0); 
    const [bmi,setbmi]=useState("");
    const [message,setmessage]=useState("");
    let calculatebmi= (event) => {
        event.preventDefault();
        if(weight === 0 || height === 0){
            alert ("Please enter a valid weight and height");
        }
            else {
                let bmi= (weight / (height*height) * 10000)
                setbmi (bmi.toFixed(1)) 

                if (bmi<18.5){
                    setmessage("You are underweight")
                } else if (bmi>=18.5 && bmi<=24.9){
                    setmessage("You have a healhty weight")
                }else if (bmi>=25 && bmi<=29.9){
                    setmessage("You are overweight")
                }else{
                    setmessage("You are obese")
                }
            }
            }
    let reload = () => {
        window.location.reload();
    }


    return (
        <div className="bmi">
            <div className="container">
                <h1 className="center">BODY MASS INDEX (BMI)</h1>
                <h2 className="center">BMI Calculator</h2>
                <p>Body mass index (BMI) is a measure of body fat based on height and weight that applies </p>
                <p>to adult men and women. Calculate your BMI to determine your goal.</p>
                <form onSubmit={calculatebmi}>
                    <div>
                        <label>Weight (kg)</label>
                        <input value={weight} onChange={(e) => setweight(e.target.value)} />
                    </div>
                    <div>
                        <label>Height (cm)</label>
                        <input value={height} onChange={(e) => setheight(e.target.value)} />
                    </div>
                    <button className="btn" type="submit">Submit</button>
                    <button className=" btn reload" type="submit" onClick={reload}>Reload</button>
                </form>
                <div className="center">
                    <h3> Your BMI is:{bmi}</h3>
                    <p>{message}</p>

                </div>


            </div>

        </div>
      
        
    )
}

export default BmiCalculator;