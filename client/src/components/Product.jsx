import './product.css'
import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Product = () => {
  const [products, setProduct] = useState([]);
  const getProducts = async (res, req) => {
    try {
      const response = await axios.get('/api/product');
      console.log(response.data);
      setProduct(response.data);
      
    } catch (err) {
      res.status(500).json(err)
    }
  }

  useEffect(()=>{
    getProducts();
  }, []);
  
  return (
    <div>
      <button onClick={getProducts}>
        Get Products
      </button>
      <button onClick={()=> console.log(products)}>
        Show Products
      </button>
    </div>
  )
}

export default Product