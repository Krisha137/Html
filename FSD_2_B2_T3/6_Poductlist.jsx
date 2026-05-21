import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import Product from "./7_Product_table";
function Productlist(){
    var products=[{name:"butterfly ",
                    Price:35000,
                    rating:4.2,
                    image:img1},
                    {name:"Chrochet",
                    Price:55000,
                    rating:4.6,
                    image:img2},
                    {name:"Panda",
                    Price:25000,
                    rating:4.8,
                    image:img3},
                    {name:"Doremon",
                    Price:25000,
                    rating:3.8,
                    image:img3}
                ]
    return(
        <>
        <Product data={products}/>
        </>
    )
}
export default Productlist