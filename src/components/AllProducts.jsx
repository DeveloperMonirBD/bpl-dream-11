import { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";

const AllProducts = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {    
        fetch("../../public/players.json")
            .then(res => res.json())
            .then(data => {
            setProducts(data);
        })
    }, [])
    
    return (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(product => (
                <SingleProduct key={product.playerId} product={product} />
            ))}
        </div>
    );
};

export default AllProducts;