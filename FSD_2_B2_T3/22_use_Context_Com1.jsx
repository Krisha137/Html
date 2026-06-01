import { createContext } from "react";
import Com2 from "./22_use_Context_Com2";

const obj = { n1: 5, n2: 4, n3: 2 };
const dicti = createContext();

export default function Com1() {
  return (
    <>
      <dicti.Provider value={obj}>
        <Com2 />
      </dicti.Provider>
    </>
  );
}
export { dicti };
