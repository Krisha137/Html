import Com3 from "./22_use_Context_Com3";
import { createContext, useContext } from "react";

const Color=createContext();

export default function Com2(){
    return(
        <>
            <Color.Provider value="red">
                <Com3 />
            </Color.Provider>
                </>
    )
}export {Color};