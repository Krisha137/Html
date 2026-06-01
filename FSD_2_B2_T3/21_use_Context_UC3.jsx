import { useContext } from "react";
import {Fname,Lname} from "./21_use_Context_UC1";

export default function UC3(){
    var fn=useContext(Fname);
    var ln=useContext(Lname);
    return(
        <>
        <h1>Welcome {fn} {ln}</h1>
        </>
    )
}

// Output ------------

// Welcome Nidhi Seta