import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Detail() {

  const { id } = useParams()
  const [detail, setdetail] = useState({})

  useEffect(() => {
    axios.get('https://northwind.vercel.app/api/products/' + id)
      .then(res => {
        setdetail(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])



  return (<>
    <h1>Id: {id}</h1>
    <hr />
    <h1>Name: {detail.name}</h1>
    <hr />
    <h1>Category: {detail.categoryId}</h1>
    <hr />
    <h1>Quantity Per Unit: {detail.quantityPerUnit}</h1>
    <hr />
    <h1>Unit Price: {detail.unitPrice}</h1>
    <hr />
    <h1>Units In Stock: {detail.unitsInStock}</h1>
    <hr />

  </>
  )
}

export default Detail