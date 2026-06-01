import { useReducer } from "react";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";

function reducer(state,action){

    if(action.type==="che"){
        if (state===img1){
            state=img2
        }
        else{
            state=img1
        }
        return state;
    }
}

function UR3(){
    const [state,dispatch]=useReducer(reducer,img1);
    return(
        <>
        <h1> <img src={state} height="300" width="300"/></h1>
        <button onClick={()=>dispatch({type:"che"})}>Change</button>
        </>
    )
}export default UR3;