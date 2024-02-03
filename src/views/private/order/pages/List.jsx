import axios from 'axios'
import React, { useEffect, useState } from 'react'

function List() {

  const [orders, setorders] = useState([])

  useEffect(() => {

    axios.get('https://northwind.vercel.app/api/orders')
      .then(response => {
        setorders(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (<>
  <table>
    <thead>
      <tr>
        <th>Order ID</th>
        <th>Customer ID</th>
        <th>Employee ID</th>
        <th>Order Date</th>
        <th>Required Date</th>
        <th>Shipped Date</th>
        <th>Ship Via</th>
        <th>Freight</th>
      </tr>
    </thead>
    <tbody>
      {orders.map(order => (
        <tr key={order.id}>
          <td>{order.id}</td>
          <td>{order.customerId}</td>
          <td>{order.employeeId}</td>
          <td>{order.orderDate}</td>
          <td>{order.requiredDate}</td>
          <td>{order.shippedDate}</td>
          <td>{order.shipVia}</td>
          <td>{order.freight}</td>
    
        </tr>
      ))}
    </tbody>
  </table>
  
  </>
  )
}

export default List