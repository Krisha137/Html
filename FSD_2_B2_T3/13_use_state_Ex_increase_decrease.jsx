import {useState} from "react";
function US2(){
    const [count,setcount]=useState(20);
    function increasecount(){
        if(count<50){
            setcount(count+1);
        }
        
    }
    function decreasecount(){
        if(count>0){
            setcount(count-1);
        }
    }
    return(
        <>
        <div>
            <h1>UseState Increase-Decrease Example</h1>
            <button onClick={increasecount}>Click to increase the count</button>
            <button onClick={decreasecount}>Click to decrease the count</button>
            <h2>Counts : {count}</h2>
        </div>
        </>
    )
}export default US2;

// Output ---------------

// UseState Increase-Decrease Example
// Click to increase the count Click to decrease the count
// Counts : 20

// Default count is 20
// Increase button increase count up to 50
// Decrease button decrease count up to 0