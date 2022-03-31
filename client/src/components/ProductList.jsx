import './productList.css'
import popularProducts from '../products'
import React from 'react'
import Product from './Product'

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


const ProductList = () => {
  return (
    <div className='pl-container'>
        {popularProducts.map((item=>(
          <Product item={item} key={item.id}/>
        )))}
    </div>
  )
}

export default ProductList