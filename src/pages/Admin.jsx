import React from 'react'
import styles from '../styles/Admin.module.scss'
import { AdminNavbar } from '../components/admin/navbar/AdminNavbar'
import { Route, Routes } from 'react-router'
import { Home } from '../components/admin/home/Home'
import { ViewProducts } from '../components/admin/viewProducts/ViewProducts'
import { AddProduct } from '../components/admin/addProduct/AddProduct'
import { Orders } from '../components/admin/orders/Orders'

const Admin = () => {
  return (
    <div className={styles.admin}>
      <div className={styles.navbar}>
        <AdminNavbar></AdminNavbar>
      </div>
      <div className={styles.content}>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="viewproducts" element={<ViewProducts />} />
          <Route path="addproduct/:id" element={<AddProduct />} />
          <Route path="orders" element={<Orders />} />
        </Routes>
      </div>
    </div>
  )
}

export default Admin
