import React from 'react'
import Link from 'next/link'
import ProductList from './productList'

const Products = () => {
  return (
    <div>
        <div>Product List
          <h1>Sign Up/Login to FNP!</h1>
        </div>
        <div><Link href='products/1'>Product 1</Link></div>
        <div><Link href='products/2'>Product 2</Link></div>
        <div><Link href='products/3' replace >Product 3</Link></div>
        <ProductList/>
    </div>
  )
}

export default Products