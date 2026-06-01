// Write react component to increase value by 5 while clicking on button. 
// Initialize value with 20. Use useReducer hook to perform the task.

import {useReducer} from "react";

function reducer(state,action){
    return state+action;
}

function UR1(){
    const [state,dispatch]=useReducer(reducer,20)
    return(
        <>
        <h1>{state}</h1>
        <button onClick={()=>dispatch(5)}>Click</button>
        </>
    )
}export default UR1;


// Output -------------

// 20  <-- intial value
// Click <-- after clicking increse 5 every time