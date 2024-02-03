import React from 'react'
import { Route, Routes } from 'react-router-dom'
import List from './pages/List'
import Detail from './pages/Detail'

function Product() {
  return (<>
    <Routes>
        <Route path="/" element={<List />} />
        <Route path="/:id" element={<Detail />} />
    </Routes>
  </>
  )
}

export default Product