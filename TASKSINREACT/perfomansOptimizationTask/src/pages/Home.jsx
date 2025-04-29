import React, { useCallback, useState,useMemo } from 'react'
import ProductList from '../components/ProductList'



const Home = () => {

    const[products, setProducts] = useState([

        { id:1, name:'Laptop',price:999, category: 'Electronics'},
        { id:2, name:'Phone',price:699, category: 'Electronics'},
        { id:3, name:'Headphones',price:199, category: 'Accessories'},
        { id:4, name:'Mouse',price:49, category: 'Accessories'},
        { id:5, name:'Keyboard',price:79, category: 'Accessories'},
          


    ]);


    const[category,setCategory]= useState('All');
    const[count,setCount]=useState(0);

    const handleAddToCart = useCallback((productId)=>{
        console.log(`the product has been added to the cart: ${productId}`);
        
    }, []);


    const filteredProducts = useMemo(()=>{
        return products.filter(product =>{
            if(category === 'All') return true;
            return product.category === category;
        })
    },[products,category]);

    const totalPrice = useMemo(()=>{
        console.log('the total price is calculated...');
        let result = 0;
        for(let i=0;i<1000000;i++){
            result +=1;
        }
        return products.reduce((total,product)=> total+ product.price,0);
    },[products]);


  return (
    <div className="app">
      <h1>Products List</h1>

      <div className="controls">
        <div>
          <label>Choose Category: </label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="All">All</option>
            <option value="Electronics">Electronics</option>
            <option value="Accessories">Accessories</option>
          </select>
        </div>

        <div>
          <p>
          Counter: {count}</p>
          <button onClick={() => setCount(prev => prev + 1)}>Increase</button>
        </div>
      </div>

      <p>Total Price: ${totalPrice}</p>

      <ProductList
        products={filteredProducts}
        onAddToCart={handleAddToCart}
      />
    </div>
  )
}

export default Home

