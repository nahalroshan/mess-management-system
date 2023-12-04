/* eslint-disable no-unused-vars */
import React from 'react'
import AdminNav from '../admin/AdminNav.jsx'
import AdminHome from './AdminHome.jsx'

function AdminDash() {
  return (
    <div className='flex flex-row'>
<AdminNav />
<AdminHome />
    </div>
  )
}

export default AdminDash
