import Navbar from "./Navbar";
import CategoryGrid from "./CategoryGrid";

const Categories = () => {
    return ( 
        <div>
            <Navbar></Navbar>
            <div className="title">
                <h1>Categories</h1>
                <CategoryGrid></CategoryGrid>
            </div>
            

        </div>
     );
}
 
export default Categories;