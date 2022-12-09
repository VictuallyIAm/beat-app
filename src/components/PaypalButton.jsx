import React, { useState } from 'react'
import { PayPalButtons } from '@paypal/react-paypal-js'
import { toast } from 'react-toastify'
import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore'
import { db, storage } from '../firebase/config'
import emailjs from '@emailjs/browser'
import { deleteObject, ref } from 'firebase/storage'
import { useNavigate } from 'react-router'
import { CLEAR_CART } from '../redux/features/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { selectEmail, selectIsLoggedIn } from '../redux/features/authSlice'

const PaypalButton = ({ products }) => {
  const [paidFor, setPaidFor] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userEmail = useSelector(selectEmail)
  const isLoggedIn = useSelector(selectIsLoggedIn)

  const templateParams = {
    name: '',
    notes: 'Check this out!',
  }

  const sendEmail = () => {
    emailjs
      .send(
        'service_321usp4',
        'template_e1v8fgl',
        templateParams,
        'Qy5EvY0m13ER3oFiB'
      )
      .then(
        (result) => {
          console.log('sent')
        },
        (error) => {
          console.log(error.message)
        }
      )
  }

  const deleteProduct = async (id, imageUrl, srcUrl, category) => {
    try {
      await deleteDoc(doc(db, category, id))
      const storageRef = ref(storage, imageUrl)
      const desertRef = ref(storage, srcUrl)
      await deleteObject(storageRef)
      await deleteObject(desertRef)
    } catch (error) {}
  }

  const handleApprove = (orderID, order) => {
    products.forEach((product) => {
      if (product.license === 'Exclusive') {
        deleteProduct(
          product.item.id,
          product.item.imageUrl,
          product.item.srcUrl,
          product.item.category
        )
      } else {
      }
    })

    products.forEach((product) => {
      if (isLoggedIn) {
        if (product.item.category === 'Beat') {
          try {
            const docRef = addDoc(collection(db, `Orders`), {
              emailPayment: order.payer.email_address,
              emailUser: userEmail,
              title: product.item.title,
              price: product.price,
              license: product.license,
              date: order.create_time,
            })
          } catch (error) {
            console.log(error.message)
          }
        } else {
          try {
            const docRef = addDoc(collection(db, `Orders`), {
              emailPayment: order.payer.email_address,
              emailUser: userEmail,
              title: product.item.title,
              price: product.price,
              date: order.create_time,
            })
          } catch (error) {
            console.log(error.message)
          }
        }
      } else {
        if (product.item.category === 'Beat') {
          try {
            const docRef = addDoc(collection(db, `Orders`), {
              emailPayment: order.payer.email_address,
              title: product.item.title,
              price: product.price,
              license: product.license,
              date: order.create_time,
            })
          } catch (error) {
            console.log(error.message)
          }
        } else {
          try {
            const docRef = addDoc(collection(db, `Orders`), {
              emailPayment: order.payer.email_address,
              title: product.item.title,
              price: product.price,
              date: order.create_time,
            })
          } catch (error) {
            console.log(error.message)
          }
        }
      }
    })
    setPaidFor(true)
  }

  if (paidFor) {
    toast.success('Payment received succesfully')
    navigate('/orders')
    dispatch(CLEAR_CART())
    sendEmail()
  }
  if (error) {
    console.log(error.message)
  }
  return (
    <PayPalButtons
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: products.map((product) => {
            return {
              reference_id: product.item.id,
              description: product.item.title,
              amount: { currency_code: 'USD', value: product.price },
            }
          }),
        })
      }}
      onApprove={async (data, actions) => {
        const order = await actions.order.capture()
        console.log(order)
        handleApprove(data.orderID, order)
      }}
      onCancel={() => {
        toast.info('Payment canceled')
      }}
      onError={(err) => {
        setError(err)
      }}
    />
  )
}

export default PaypalButton
