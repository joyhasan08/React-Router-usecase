import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Hero from "./Hero";


const ProductContainer = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>

            <Hero></Hero>
            <h1>Product  </h1>
            <div className=" grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4 max-w-screen-xl mx-auto">
                {
                    products.map((product, idx) => <ProductCard key={idx} product={product} ></ProductCard>)
                }
            </div>
        </div>
    );
};

export default ProductContainer;