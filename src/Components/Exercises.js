function Exercises({ exercise }) {
    return (
        <div>
            <h2>{exercise.name}</h2>
            <p>{exercise.description}</p>
            <p>{exercise.muscle_group}</p>
        </div>
    )
}
function ExerciseGuide({ exercises }) {
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