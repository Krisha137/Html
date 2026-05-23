function Events1(){
    const handleclick=()=>{
        alert(`Welcome`);
    }
    return(
        <>
        <button style={{color:"green",backgroundColor:"yellow"}} onClick={handleclick}>Click Here</button>
        </>
    )
}export default Events1;