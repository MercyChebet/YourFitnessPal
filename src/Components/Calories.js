import { useState } from "react";

function CaloriesCalculator() {
    const [gender, setgender]=useState(0);
    const [age,setage]=useState(0);
    const [height, setheight]=useState(0);
    const [weight, setweight]= useState(0);
    const [activity, setactivity]=useState(0);

    let calculateBMR = (event) => {
        event.preventDefault();
    }
    // if (age <= 80 && age >= 15 && height > 0 && weight > 0) {
    //     // Male:
    //     if (gender[0].checked) {
    //       bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    //     }
    //     //Female:
    //     else if (gender[1].checked) {
    //       bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    //     }
    //     // Gender unchecked:
    //     else {
    //       alert("Please enter a valid input!");
    //       return;
    //     }
    //     if (activity == 0) need = bmr;
    //     else if (activity == 1) need = bmr * 1.2;
    //     else if (activity == 2) need = bmr * 1.465;
    //     else if (activity == 3) need = bmr * 1.375;
    //     else if (activity == 4) need = bmr * 1.55;
    //     else if (activity == 5) need = bmr * 1.725;
    //     else need = bmr * 1.9;

    return (
        <div className="container">

            <h1 className="center">CALORIC NEEDS</h1>
            <h2 className="center">Basic Metabolic Rate (BMR)/Calorie Needs Calculator</h2>
            <p>
                The Calorie Calculator can be used to estimate
                the number of calories a person needs to consume each day</p>
            <p>This calculator can also provide some simple guidelines for gaining or losing weight.</p>

            <form onSUbmit="calculateBMR">
                <label for="gender">Gender:</label><br />
                <input type="radio" value="male" />
                <label className="gender" for="male">Male</label>
                <input type="radio" />
                <label className="gender" for="female">Female</label><br />
                <label for="age">Age:</label><br />
                <input type="text" className="age" placeholder="15-80 years" /><br />
                <label for="calorie-height">Height:</label><br />
                <input type="text" className="calorie-height" placeholder="Centimeters" /><br />
                <label for="calorie-weight">Weight:</label><br />
                <input type="text" className="calorie-weight" placeholder="Kilograms" /><br />
                <label for="activity">Activity:</label><br />
                <select name="activity" className="activity">
                    <option value="basal">Basal Metabolic Rate (BMR)</option>
                    <option value="sedentary">Sedentary: little or no exercise</option>
                    <option value="light">Light: exercise 1-3 times/week</option>
                    <option value="moderate">Moderate: exercise 4-5 times/week</option>
                    <option value="active">Active: daily exercise or intense exercise 3-4 times/week
                    </option>
                    <option value="very-active">Very Active: intense exercise 6-7 times/week</option>
                    <option value="extra-active">Extra Active: very intense exercise daily or physical
                        job</option>
                </select><br /><br />
                <button className="btn">Submit</button>
            </form>
            <div>
            <h4 className="calorie-result">YOUR CALORIE NEEDING = [Not Entered]</h4><br />
                        <h3>Guideline:</h3>
                        <ul>
                            <li>To Lose Weight: Take 250-500 minus your calorie needing.</li>
                            <li>To Maintain: Take 0-200 minus or 0-200 plus your calorie needing.</li>
                            <li>To Gain Weight: Take 250-500 plus your calorie needing.</li>
                        </ul>
            </div>
        </div>
       

    )

}

export default CaloriesCalculator;