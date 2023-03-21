import { useEffect, useState } from "react"
import AllWorkout from "../components/AllWorkout";
import InsertWorkoutForm from "../components/InsertWorkoutForm";


const Home = () => {
    const [workouts, setWorkouts] = useState(null);

    useEffect(() => {
        //fonction
        const fetchWorkouts = async () => {
            //go to localhost take the JSON -> res.json() in Controller
            const response = await fetch('/api/workout');
            //put the json in this Const
            const json = await response.json();

            //if the json is not null
            if(response.ok){
                //set const to json
                setWorkouts(json)
            }
            else{
                console.log("NOPE");
            }
        }

        fetchWorkouts()
    }, [])

    return(
        <div className="home flex w-full">
            <div className="container1 w-2/3">
            <div className="heading flex flex-col justify-center p-10">
                <h1 class="font-medium leading-tight text-5xl mt-0 mb-2 text-gray-200 mx-auto">All Workouts Available</h1>
            </div>
            
                <div className="workouts flex flex-col w-full justify-items-start p-10">
                    
                    {workouts && workouts.map((workout) => (               
                        <AllWorkout key={workout._id} workout={workout} />                   
                    ))}
                </div>
            </div>

            {/* form ============================================================================================================== */}
            <div className="container2 w-1/3 flex flex-col align-center fixed justify-center top-1/3 left-2/3">
            
                    <InsertWorkoutForm/>
            
            </div>
            
        </div>
    )
}

export default Home
