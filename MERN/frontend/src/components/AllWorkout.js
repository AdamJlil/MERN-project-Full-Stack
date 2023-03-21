
import { Link } from 'react-router-dom'

const AllWorkout = ({workout}) => {
    return ( 
        <div class="flex justify-center p-5 w-full" key={workout._id}>
                    <div class="block p-6 rounded-lg shadow-lg bg-gray-100 dark:bg-gray-800 max-w-sm w-1/2">
                      <h5 class="text-cyan-400 font-bold dark:text-cyan-300 text-2xl leading-tight font-medium mb-2">{workout.title}</h5>
                      <p class="text-gray-700 dark:text-gray-200 font-bold text-base ">
                        Load : {workout.load}
                      </p>
                      <p class="text-gray-700 dark:text-gray-200 font-bold text-base ">
                        Reps : {workout.reps}
                      </p>
                      <p class="text-gray-600 dark:text-gray-300 text-base mb-2 font-bold">
                        Date : {workout.createdAt}
                      </p>
                      
                      <Link to={workout._id}>
                        
                          <button type="button" id={workout._id} class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Update / Delete</button>
                      </Link>
                        
                      
                    </div>
                  </div>
     );
}
 
export default AllWorkout;