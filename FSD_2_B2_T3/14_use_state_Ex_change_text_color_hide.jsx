import {useState} from "react";
function US3(){
    const [text,settext]=useState("LJ University");
    const [color,setcolor]=useState("red");
    const [hide,sethide]=useState("Hide");
    const [hideshow,sethideshowtext]=useState("React JS");
    function changetext(){
        if(text==="LJ University"){
            settext("Welcome Students")
        }
        else{
           settext("LJ University")
        }
    }
    function changecolor(){
        if(color==="red"){
            setcolor("blue")
        }
        else{
           setcolor("red") 
        }
    }
    function hidetext(){
        if(hide==="Hide"){
            sethide("Show")
            sethideshowtext(" ")
        }
        else{
           sethide("Hide") 
           sethideshowtext("React JS")
        }
    }
    return(
        <>
        <div>
            <h1>UseState Changing Example</h1>
            <h2  style={{color:color}}>{text}</h2>
            <h3>{hideshow}</h3>
            <button onClick={changetext}>Click to Change the Text</button>
            <button onClick={changecolor}>Click to Change the Color</button>
            <button onClick={hidetext}>{hide}</button>
        </div>
        </>
    )
}export default US3;