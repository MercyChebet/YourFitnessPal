import NavBar from "./NavBar";
function HowItWorks() {
    return (
        <div className="Howitworks">
            <p>Build your body and fitness with a professional touch</p>
        </div>
    )
}
function MoreSections() {
    return (
        <div className="row">
            
            <h1>ITS TIME TO PUT YOURSELF FIRST</h1>
            <p>
                We work with men and women that have let fitness slide down their list of priorities, and want to make a<br />
                change <br />
                Using our Armoury Transformation Formula, we'll guide you through our proven system of creating a<br />
                healthier, happier and more confident version of yourself in the next 6 weeks- without boring workouts <br />
            </p>
            
                <img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="gym image"></img>
        
            
                <h1>BE A BETTER YOU</h1>
                <p>
                Whether you want to lose weight, tone up, gain lean muscle or you are happy as you are 
                but would like a healthier lifestyle, YourFitnessPal is the right choice for you. Everyone wants
                to feel comfortable in their own skin, therefore, even if you are working a busy schedule.
                </p>
            
        </div>
    )
}
function Footer() {
    return (
        
    )
}
function Home() {
    return (
        <>
            <div className="landingpage">
                <NavBar />
                <div>
                    <h1>
                        Become Fitter, Stronger, & More Confident
                    </h1>
                    <HowItWorks />
                </div>
            </div>
            <br></br>

            <div>
                <MoreSections />
            </div>
            
        </>

    )
}
export default Home;