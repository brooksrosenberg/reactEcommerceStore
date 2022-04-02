import './productList.css'
import React, {useState, useEffect} from 'react'
import SingleProduct from './SingleProduct'
import axios from 'axios'

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