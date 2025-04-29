import React from 'react'


const Product = ({ product,onAddToCart}) => {
console.log(`Rendering Product: ${product.name}`);

  return (
    <div className='product'>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      <button onClick={()=> onAddToCart(product.id)}>Add to Cart</button>
    </div>
  )
}

export default React.memo(Product);
