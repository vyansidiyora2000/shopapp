import '../App.css';

function ProductList({ product,addToCart }) {
    return (
        <div className='flex'>
            {
                product.map((productItem, productIndex) => {
                    return (
                        <div style={{ width: '33%', height: '33%' }}>
                            <div className='product-item'>
                                <img src={productItem.url} width="100%" style={{ width: '300px', height: '300px',borderRadius:'25px' }}/>
                                <p>{productItem.name} | {productItem.category} </p>
                                <p> {productItem.seller} </p>
                                <p> Rs. {productItem.price} /-</p>
                                <button className="btn btn-dark btn-block"
                                    onClick={() => addToCart(productItem)}
                                >Add To Cart</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductList