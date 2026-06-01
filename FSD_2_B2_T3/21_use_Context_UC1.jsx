import { createContext, useContext } from "react";
import UC2 from "./21_use_Context_UC2";

const Fname=createContext();
const Lname=createContext();

export default function UC1(){
    return (
        <>
        <Fname.Provider value="Nidhi">
            <Lname.Provider value="Seta">
                <UC2/>
            </Lname.Provider>
        </Fname.Provider>
        </>
    )
}export {Fname,Lname};