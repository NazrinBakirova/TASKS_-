import React from 'react'
import Product from './Product'


const ProductList = ({ products, onAddToCart}) => {
    console.log('Rendering ProductList');
    
  return (
    <div className='product-list'>
        {products.map(product =>(
            <Product
            key={product.id}
            product={product}
            onAddToCart = {onAddToCart}/>
        ))}
      
    </div>
  )
}

export default React.memo(ProductList)
