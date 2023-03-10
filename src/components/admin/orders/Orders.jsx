import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
} from 'firebase/firestore'
import Notiflix from 'notiflix'
import React, { useEffect, useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { db } from '../../../firebase/config'
import { Loader } from '../../loader/Loader'
import styles from './Orders.module.scss'

export const Orders = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [orders, setOrders] = useState([])

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

  const confirmDelete = (id) => {
    Notiflix.Confirm.show(
      'Delete this shit?',
      'This is really hard, are you sure?',
      'Delete',
      'No, let it be',
      function okCb() {
        deleteProduct(id)
      },
      function cancelCb() {},
      {
        width: '320px',
        borderRadius: '8px',
        titleColor: 'white',
        messageColor: 'white',
        okButtonBackground: 'red',
        CSSAnimationStyle: 'zoom',
        backgroundColor: 'rgba(0, 16, 24, 1)',
      }
    )
  }
  const deleteProduct = async (id) => {
    try {
      await deleteDoc(doc(db, 'Orders', id))

      toast.success('Deleted')
    } catch (error) {
      toast.error(error.message)
    }
  }

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
                <th>Date</th>
                <th>Order ID</th>
                <th>Title</th>
                <th>Amount</th>
                <th>EmailPay</th>
                <th>EmailLog</th>
                <th>License</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => {
                const {
                  id,
                  title,
                  emailPayment,
                  emailUser,
                  createAt,
                  license,
                  price,
                } = order

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
                    <td style={{ width: '10%' }}>{createDate}</td>
                    <td style={{ width: '10%' }}>{id}</td>
                    <td style={{ width: '25%' }}>{title}</td>
                    <td style={{ width: '5%' }}>${price}</td>
                    <td style={{ width: '15%' }}>{emailPayment}</td>
                    <td style={{ width: '15%' }}>{emailUser}</td>
                    <td style={{ width: '15%' }}>{license}</td>
                    <td style={{ width: '5%' }}>
                      <FaTrashAlt
                        size={18}
                        color="red"
                        onClick={() => confirmDelete(id)}
                      />
                    </td>
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
