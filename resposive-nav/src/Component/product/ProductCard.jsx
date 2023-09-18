


const ProductCard = ({ product }) => {
    console.log(product)
    const { title, image, id, description, price } = product;
    return (
        <div>

            <div className="card   glass">
                <figure ><img className="h-44 w-ful p-2" src={image} alt={id} /></figure>
                <div className="card-body">
                    <h2 className="card-title h-32 overflow-y-clip ">{title}</h2>
                    <p className=" h-20 overflow-y-hidden">{description}</p>
                    <h2 className="card-title text-blue-500">{price}</h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">buy now</button>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductCard;