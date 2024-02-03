import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function List() {

  const [products, setproducts] = useState([])

  useEffect(() => {
    axios.get('https://northwind.vercel.app/api/products')
      .then(res => {
        setproducts(res.data)
      })
  }, [])

  return (<>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Supplier</th>
          <th>Category</th>
          <th>Quantity Per Unit</th>
          <th>Unit Price</th>
          <th>Units In Stock</th>
          <th>Units On Order</th>
          <th>Reorder Level</th>
          <th>Discontinued</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => {
          return (
            <tr key={index}>
              <td><Link to={'/products/'+ product.id}>{product.id}</Link></td>
              <td>{product.name}</td>
              <td>{product.supplierId}</td>
              <td>{product.categoryId}</td>
              <td>{product.quantityPerUnit}</td>
              <td>{product.unitPrice}</td>
              <td>{product.unitsInStock}</td>
              <td>{product.unitsOnOrder}</td>
              <td>{product.reorderLevel}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  </>
  )
}

export default List