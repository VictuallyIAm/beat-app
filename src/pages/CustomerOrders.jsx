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
      const q = query(ordersRef, orderBy('createAt', 'desc'))

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
                <th> Order ID</th>
                <th>Title</th>
                <th>Amount</th>
                <th>License</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {ordersFiltered.map((order) => {
                const { id, title, createAt, license, price } = order
                const date = new Date(createAt.seconds * 1000)
                const createDate =
                  date.getMonth() +
                  1 +
                  '.' +
                  date.getDate() +
                  '.' +
                  date.getFullYear() +
                  '\u00A0' +
                  date.getHours() +
                  ':' +
                  date.getMinutes()
                return (
                  <tr key={id}>
                    <td style={{ width: '20%' }}>{id}</td>
                    <td style={{ width: '25%' }}>{title}</td>
                    <td style={{ width: '20%' }}>${price}</td>
                    <td style={{ width: '15%' }}>{license}</td>
                    <td style={{ width: '20%' }}>{createDate}</td>
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
