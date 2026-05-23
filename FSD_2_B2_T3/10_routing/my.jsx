// npm i react-router-dom

//           MainApp
//             |
//           My.jsx
//        /  /  \    \
//      /  /     \     \ 
// Home  About  Contact  Nopage

import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Nopage from "./Nopage"

// <Router>
// <Link to=""
// <Link
// <Routes>
//     <Route>
//     </Route>
// </Routes>
// </Router>

function My(){
    return(
        <>
        <div>
            <Router>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/contact" element={<Contact />}/>
                    <Route path="*" element={<Nopage />}/>
                </Routes>
            </Router>
        </div>
        </>
    )
}export default My;
