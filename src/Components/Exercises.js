import { useEffect, useState } from "react"




function Exercises({ exercise }) {
    
    return (
        <div>
            <h2>{exercise.name}</h2>
            <p>{exercise.description}</p>
            <p>{exercise.muscle_group}</p>
        </div>
    )

}
function ExerciseGuide() {
    const [exercises, setexercises] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/exercises")
    .then((res) => res.json())
                .then((exercises) => {
                    console.log(exercises);
                    setexercises(exercises);
                });
    }, []);
    
    return (
        <div>
            {exercises.map((exercise, key) =>
                <Exercises exercise={exercise} key={key} />
            )
            }
        </div>
    )
}
export default ExerciseGuide;