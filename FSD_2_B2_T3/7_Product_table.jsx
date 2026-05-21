function Product(props){
    return(
        <>
        {<table border="2" width={1000}>
            <tr>
                <td>Name</td>
                <td>Image</td>
                <td>Price</td>
                <td>Rating</td>
            </tr>
            {props.data.filter((p)=>p.rating>4)
             .map((p)=>(
                <tr>
                    <td>{p.name}</td>
                    <td><img src={p.image} width="100"/></td>
                    <td>{p.Price}</td>
                    <td>{p.rating}</td>
                </tr>
             ))}
        </table>}
        
        </>
    )
}
export default Product

// Output -----------

// Name	    Image	  Price 	Rating
// butterfly		      35000	     4.2
// Chrochet		      55000	     4.6
// Panda		          25000	     4.8