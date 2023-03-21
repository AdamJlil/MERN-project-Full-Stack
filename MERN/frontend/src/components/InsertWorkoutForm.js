import { useState } from "react";


const InsertWorkoutForm = () => {

    const[title, setTitle] = useState('');
    const[reps, setReps] = useState('');
    const[load, setLoad] = useState('');
    const[err, setErr] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const workout = {title, load, reps}

        const response = await fetch('/api/workout', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-type': 'application/json'
            }
        })
        
        const json = await response.json

        if(!response.ok){
            setErr(json.error)
        }
        if(response.ok){
            setTitle('')
            setLoad('')
            setReps('')
            setErr(null)
            console.log('new workout added!', json);
        }
    }

    return ( 
        <div class="block p-6 rounded-lg shadow-lg bg-white w-full max-w-md mx-auto bg-gray-300 dark:bg-gray-700">

            <div className="heading flex flex-col justify-center p-2">
                <h1 class="font-medium leading-tight text-2xl mt-0 mb-2 text-gray-200 mx-auto">Add New Workout</h1>
            </div>

            <form className="">
                    
                    <div class="form-group mb-6">
                        <input type="text" class="form-control block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-gray-200 dark:bg-gray-800
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
                        placeholder="Title"
                        onChange={(e) => setTitle(e.target.value)}/>
                    
                    </div>
                    <input type="number" class="form-control block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        bg-gray-200 dark:bg-gray-800
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
                        placeholder="Load"
                        onChange={(e) => setLoad(e.target.value)}/>
                    <div class="form-group mb-6">
                    
                    </div>
                    <div class="form-group mb-6">
                    <input type="number"
                    class="
                    bg-gray-200 dark:bg-gray-800
                        form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                    "
                    id="exampleFormControlTextarea13"
                    rows="3"
                    placeholder="reps"
                    onChange={(e) => setReps(e.target.value)}
                    ></input>
                    </div>
                    <div class="form-group form-check text-center mb-6">
                    
                    
                    </div>
                    <button type="submit" class="
                    w-full
                    px-6
                    py-2.5
                    bg-blue-600
                    text-white
                    font-medium
                    text-xs
                    leading-tight
                    uppercase
                    rounded
                    shadow-md
                    hover:bg-blue-700 hover:shadow-lg
                    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                    active:bg-blue-800 active:shadow-lg
                    transition
                    duration-150
                    ease-in-out">POST new Workout</button>

                    {err && <div><label 
                    class="
                    bg-gray-200 dark:bg-gray-800
                        form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                    "
                    id="exampleFormControlTextarea13">{err}</label></div>}

                </form>
                </div>
     );
}
 
export default InsertWorkoutForm;