function Task(){
    const x="pqr";
    return(
        <>
        <h1>Welcome "{x}"</h1> {/* Welcome "pqr"*/}
        <h2>Swagatam🙏 {x}</h2> {/*Swagatam🙏 pqr*/}  
        <h1>Welcome "{x}"</h1>  {/* Welcome "pqr" */}
        <h1>Welcome {"{x}"} </h1>  {/* Welcome {x} */}
        <h1>Welcome {x.toUpperCase()} </h1> {/*  Welcome PQR */}                               
        </>
    )
}
export default Task;

// Output -----------

// Welcome "pqr"
// Swagatam🙏 pqr
// Welcome "pqr"
// Welcome {x}
// Welcome PQR