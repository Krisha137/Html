import {useState} from "react";
function US1(){
    const [count,setcount]=useState(0);
    function handlecount(){
        setcount(count+1);
    }
    return(
        <>
        <div>
            <h1>UseState Increase Example</h1>
            <button onClick={handlecount}>Click to increase the count</button>
            <h2>Counts : {count}</h2>
        </div>
        </>
    )
}export default US1;

// Output ---------------

// UseState Example
// Click to increase the count
// Counts : 0 <-- default After click on button it will increases 1,2,3,4,5,....