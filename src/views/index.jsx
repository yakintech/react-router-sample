import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import Header from '../components/site-components/layout/Header'
import { Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../routes'
import Footer from '../components/site-components/layout/Footer'


function Views() {

  const { isLogin } = useContext(AuthContext)


  return (<>
    <Header />

    <Routes>
      {
        publicRoutes.map((route, index) => {
          return <Route key={index} {...route} />
        }
        )
      }
      {
        isLogin ? privateRoutes.map((route, index) => {
          return <Route key={index} {...route} />
        }) : <></>
      }
    </Routes>

    <Footer/>
  </>
  )
}

export default Views