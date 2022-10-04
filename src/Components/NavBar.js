import { NavLink, Router, BrowserRouter } from "react-router-dom";

function NavBar () {
    return (
        <BrowserRouter>
        <div className="NavBar"> 
             <NavLink exact to = "/">Home</NavLink>
            <NavLink exact to = "/bmi">BMI Calculator</NavLink>
            <NavLink exact to = "/calories">Caloric Needs</NavLink>
            <NavLink exact to = "/exercises">Exercise Guide</NavLink>
            
        </div>
        </BrowserRouter>
    )
}
export default NavBar;