import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Loader } from '../components/loader/Loader'
import { db } from '../firebase/config'
import styles from '../styles/CustomerOrders.module.scss'
import { selectEmail } from '../redux/features/authSlice'
import { useSelector } from 'react-redux'

const CustomerOrders = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [orders, setOrders] = useState([])
  const emailUser = useSelector(selectEmail)

  useEffect(() => {
    getOrders()
  }, [])

  const getOrders = () => {
    setIsLoading(true)
    try {
      const ordersRef = collection(db, 'Orders')
      const q = query(ordersRef, orderBy('date', 'desc'))

      onSnapshot(q, (snapshot) => {
        const allOrders = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        setOrders(allOrders)
        setIsLoading(false)
      })
    } catch (error) {
      setIsLoading(false)
      toast.error(error.message)
    }
  }

  const ordersFiltered = orders.filter((order) => order.emailUser === emailUser)
  return (
    <>
      {isLoading && <Loader />}
      <div className={styles.table}>
        {orders.length === 0 ? (
          <p> Fetching stuff...</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Amount</th>
                <th>License</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {ordersFiltered.map((order) => {
                const { id, title, imageUrl, srcUrl, date, license, price } =
                  order
                return (
                  <tr key={id}>
                    <td style={{ width: '45%' }}>{title}</td>
                    <td style={{ width: '20%' }}>${price}</td>
                    <td style={{ width: '15%' }}>{license}</td>
                    <td style={{ width: '20%' }}>{date}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  )
}

export default CustomerOrders
