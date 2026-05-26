// Create a React application for a Student Portfolio Website using functional components and React Router.
// Components
// •	Main.jsx – Configure routes 
// •	Home.jsx – Display student details 
// •	Projects.jsx – Display projects 
// •	Nopage.jsx- Page not found.
// Requirements
// •	Create navigation for Home and Projects pages. 
// •	Home page should display: Welcome to My Portfolio also show student Name, Course, and Education. 
// •	Add a link to the Projects page. 
// •	Projects page should display 3 projects using props: 
// o	Project Name 
// o	Description 
// o	Image 
// •	Use functional components and basic CSS styling.


import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Shome from "./Shome"
import Sproject from "./Sproject"
import Snopage from "./Snopage"
import img1 from "../assets/img3.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img1.png"


function Student(){
    const s=[{name:"Hospital Managment",desc:"FSD",image:img1},
        {name:"Expence Tracker",desc:"Python",image:img3},
        {name:"Doremon",desc:"Cartton",image:img2}
    ]
    return(
        <>
        <div>
            <Router>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                </ul>
                <Routes>
                    <Route path="/" element={<Shome/>}/>
                    <Route path="/projects" element={<Sproject data={s}/>}/>
                    <Route path="*" element={<Snopage/>}/>
                </Routes>
            </Router>
        </div>
        </>
    )
}export default Student;



// Output-----------------

// Home <-- link to home also is is default
// Projects <-- link to projects

// Welcome to My Portfolio
// My Name is Sizuka
// My Course Name is CSE
// I am Studing in Btech
// Project <-- link to projects
