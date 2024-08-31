
import { WorkoutsContext } from "../context/WorkoutContext.jsx";
import { useContext } from "react";

export const useWorkoutsContext = ()=>
// export default function useWorkoutsContext ()
{ console.log("in hooks/useWorkoutsContext.jsx/useWorkoutsContext   pre useContext(");
  const context1 =useContext(WorkoutsContext);
  console.log("in hooks/useWorkoutsContext.jsx/useWorkoutsContext post useContext(");
     if (!context1) {throw Error("aaa use context only in designated components");}              

  return context1;
}


//const {workouts, dispatch} = useWorkoutsContext();
//dispatch({type: "SET_WORKOUTS", payload: response.data});


export default useWorkoutsContext ;
