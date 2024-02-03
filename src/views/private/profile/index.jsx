import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProfileMain from './pages/ProfileMain'
import ChangePassword from './pages/ChangePassword'

function ProfilePages() {
  return (<>
    <Routes>
        <Route path="/" element={<ProfileMain />} />
        <Route path="/change-password" element={<ChangePassword />} />
    </Routes>
  </>
  )
}

export default ProfilePages