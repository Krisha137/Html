// Write react component to increase value by 5 while clicking on button.
//  Initialize value with 20. Use useReducer hook to perform the task.

import { useReducer } from "react";

function reducer(state,action){
    if(action.type==="inc"){
        return state+2;
    }
    else if(action.type==="dec"){
        return state-2;
    }
    else {
        return state;
    }
}

function UR2(){
    const [state,dispatch]=useReducer(reducer,50);
    return(
        <>
        <h1> {state}</h1>
        <button onClick={()=>dispatch({type:"inc"})}>Increse</button>
        <button onClick={()=>dispatch({type:"dec"})}>Decrese</button>
        </>
    )
}export default UR2;