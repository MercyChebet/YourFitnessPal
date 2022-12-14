import { NavLink, Router, BrowserRouter } from "react-router-dom";

function NavBar() {
    return (
       

            <div className="NavBar">
                <div className="Appname">
                    YOURFITNESSPAL
                </div>
                <div className="navlinks">
                    <NavLink className={"links"} exact to="/">Home</NavLink>
                    <NavLink className={"links"} exact to="/bmi">BMI Calculator</NavLink>
                    <NavLink className={"links"} exact to="/calories">Caloric Needs</NavLink>
                    <NavLink className={"links"} exact to="/exercises">Exercise Guide</NavLink>
                    <NavLink className={"links" } exact to="/contacts">Contact Us</NavLink>
                </div>
            </div>
        
    )
}
export default NavBar;