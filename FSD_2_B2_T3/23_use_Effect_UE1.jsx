// import { useEffect } from "react";

// useEffect(function,depe)
// useEffect(function,[])
// useEffect(fun)
// useEffect(fun,[state])

import {useEffect,useState} from "react";

function UE1(){
    const [count1,setcount1] = useState(0);
    const [count2,setcount2] = useState(0);
    useEffect(()=> alert("Effect"),[]) // [] only one time ,when render page
                    // without [] every time give alert event click on button
    return (
        <>
        <button onClick={()=> setcount1(count1+1)}>Button A {count1+1}</button>
        <button onClick={()=> setcount2(count2+1)}>Button B {count2+1}</button>
        </>
    )
}export default UE1;