
import {createContext, useReducer} from "react";

//export const WorkoutsContext = createContext(null);
//export type WorkoutsContextType ={workouts: void  dispatch: 0}; 
type WorkoutsContextType ={workouts: string, dispatch:(workouts:any) => {null:any} }; 
export const WorkoutsContext = createContext<WorkoutsContextType>({} as WorkoutsContextType);

//     return {workouts: [...state.workouts]}
//export const WorkoutsContext = React.createContext<IworkoutsContext || undefined>(undefined);

export const workoutsReducer = (state:any,action:any)=>
{ console.log("WorkoutReducer, pre switch: state = ",state);
  console.log("WorkoutReducer, pre switch: action = ",action);
  console.log("WorkoutReducer, pre switch: action.payload = ",action.payload);
  switch (action.type)
  {case "SET_WORKOUTS":
     return{workouts:action.payload}
   case "CREATE_WORKOUT":
     return {workouts:[action.payload, ...state.workouts]}      
   case "DELETE_WORKOUT":
     return {workouts: state.workouts.filter((w:any)=>w._id !== action.payload._id)}                        
   case "UPDATE_WORKOUT": {console.log("WorkoutsReducer/UPDATE_WORKOUT:  state = ", state);
                           console.log("WorkoutsReducer/UPDATE_WORKOUT:  state.workouts = ", state.workouts);  
                           console.log("WorkoutsReducer/UPDATE_WORKOUT:  ...state.workouts = ", ...state.workouts);
                           console.log("WorkoutsReducer/UPDATE_WORKOUT:  action.payload._id = ", action.payload);
                           console.log("WorkoutsReducer/UPDATE_WORKOUT:  action.payload._id = ", action.payload._id);

                           // workouts: state.workouts.filter((w:any)=>w._id !== action.payload._id); 
                           {state.workouts && Object.values(state.workouts).map((w:any)  => {if (w._id === action.payload._id)      
                                                               {//w.reps = 88;  
                                                                  w.reps=action.payload.reps;    // yeah
                                                                  w.load=action.payload.load;
                                                                 //w = Object.values(action.payload);  //Objectaction.payload.Object.values();
                                                               }   
                                                               //return {workouts: [...state.workouts]}  
                                                                                                     }     
                                                                    )       
                                                                //   return w;                         
                           }     
                           return {workouts: [...state.workouts]}
                          }   
     default: return state;       
  } 
}
{/*////const workout = await WorkoutModelDb.findOneAndUpdate({_id : id},{...req.body}); */}       
export const WorkoutsContextProvider = ({ ...children })=>
{ console.log("in context/WorkoutsContext.jsx WorkoutsContextProvider pre useReducer(workoutsReducer,{workouts: null })");
  console.log("WorkoutsContextProvider  {...children} = ",{...children});
  console.log("WorkoutsContextProvider  children = ", {children});
  console.log("WorkoutsContextProvider  Object.values(children) = ",  Object.values(children)  );
  //console.log("WorkoutsContextProvider  {workouts} = ", {workouts:never});
  const [state, dispatch] = useReducer(workoutsReducer,{workouts: null });
//dispatch({type: 'SET_WORKOUTS',payload: [{}, {}]});    { Object.values(children)  }
console.log("in context/WorkoutsContext.jsx WorkoutsContextProvider post useReducer(workoutsReducer,{workouts: null })");  
console.log("state (tsx) = ",state);
console.log("dispatch (tsx)= ",dispatch); 
//title:{type: String,
//  required: true
//  },
//kids:{type: ReactNode} 
//const Provider = _Provider as unknown as React.FC<{
// children?: JSX.Element | string;
//  store: any;
//}>;
 //const ThemeProviderFixed = ThemeProvider as unknown as React.FC<PropsWithChildren<{ theme: string }>>;
 //const ThemeProviderFixed = WorkoutsContext.Provider as unknown as React.FC<PropsWithChildren<{ theme: string }>>;
 




return(
  <WorkoutsContext.Provider value = {{...state,  dispatch }}>  
     { Object.values(children)  }
  </WorkoutsContext.Provider>  
      )    
}


export default { WorkoutsContextProvider, workoutsReducer };

