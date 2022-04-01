import './productList.css'
import popularProducts from '../products'
import React, {useState, useEffect} from 'react'
import SingleProduct from './SingleProduct'
import axios from 'axios'

// const [products, setProduct] = useState([]);
// const getProducts = async (res, req) => {
//   try {
//     const response = await axios.get('/api/product');
//     console.log(response.data);
//     setProduct(response.data);
    
//   } catch (err) {
//     res.status(500).json(err)
//   }
// }

// useEffect(()=>{
//   getProducts();
// }, []);

const baseURL = "/api/product"


const ProductList = () => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setProduct(response.data);
      console.log(response.data)
      console.log(products)
    })
  }, [])

  if(!products) return null
  console.log(products)

  return (
    <div className='pl-container'>
        {products.map((item=>(
          <SingleProduct item={item} key={item.id}/>
        )))}
    </div>
  )
}

export default ProductList