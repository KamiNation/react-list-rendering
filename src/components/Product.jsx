function Product (props){
    const {productImage,productName, productPrice } = props
    return(
        <>
            <div>
                <img src={productImage} alt="" />
                <p>{productName}</p>
                <h4>#{productPrice}</h4>
            </div>
            
        </>
    )
}

export default Product