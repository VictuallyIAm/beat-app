import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
} from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { PlayPause } from '../../PlayPause'
import { Link } from 'react-router-dom'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { Loader } from '../../loader/Loader'
import { db, storage } from '../../../firebase/config'
import styles from './ViewProducts.module.scss'
import { deleteObject, ref } from 'firebase/storage'
import Notiflix from 'notiflix'
import { useDispatch } from 'react-redux'
import { STORE_PRODUCTS } from '../../../redux/features/productSlice'

const categories = [
  { id: 1, name: 'Beat' },
  { id: 2, name: 'Sample' },
  { id: 3, name: 'Sound' },
  { id: 4, name: 'Kit' },
]

export const ViewProducts = () => {
  const dispatch = useDispatch()
  const [category, setCategory] = useState('Beat')
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e) => {
    const value = e.target.value
    setCategory(value)
  }

  useEffect(() => {
    getProducts()
  }, [category])

  const getProducts = () => {
    setIsLoading(true)
    try {
      const productRef = collection(db, category)
      const q = query(productRef, orderBy('createdAt', 'desc'))

      onSnapshot(q, (snapshot) => {
        const allProducts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        setProducts(allProducts)
        setIsLoading(false)
        dispatch(STORE_PRODUCTS({ products: allProducts }))
      })
    } catch (error) {
      setIsLoading(false)
      toast.error(error.message)
    }
  }
  const confirmDelete = (id, imageUrl, srcUrl, category) => {
    Notiflix.Confirm.show(
      'Delete this shit?',
      'This is really hard, are you sure?',
      'Delete',
      'No, let it be',
      function okCb() {
        deleteProduct(id, imageUrl, srcUrl, category)
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
  const deleteProduct = async (id, imageUrl, srcUrl, category) => {
    try {
      await deleteDoc(doc(db, category, id))
      const storageRef = ref(storage, imageUrl)
      const desertRef = ref(storage, srcUrl)
      await deleteObject(storageRef)
      await deleteObject(desertRef)
      toast.success('Deleted')
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <>
      <div className={styles.products}>
        <div className={styles.table}>
          <div className={styles.tableHead}>
            <h1>All your stuff</h1>
            <select
              className={styles.category}
              required
              name="category"
              onChange={(e) => {
                handleInputChange(e)
              }}
            >
              <option value="" disabled>
                --Choose category--
              </option>
              {categories.map((cat) => {
                return (
                  <option value={cat.name} key={cat.id}>
                    {cat.name}
                  </option>
                )
              })}
            </select>
          </div>
          {isLoading && <Loader />}
          {products.length === 0 ? (
            <p> Fetching stuff...</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>s/n</th>
                  <th>Image</th>
                  <th>Title</th>
                  <th>BPM</th>
                  <th>Tag</th>
                  <th>Tag</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => {
                  const {
                    id,
                    title,
                    price,
                    imageUrl,
                    bpm,
                    tagOne,
                    tagTwo,
                    srcUrl,
                    category,
                  } = product
                  return (
                    <tr key={id}>
                      <td style={{ width: '5%' }}>
                        <PlayPause />
                      </td>
                      <td style={{ width: '20%' }}>
                        <img
                          src={imageUrl}
                          alt={title}
                          style={{ width: '100%', height: '50px' }}
                        />
                      </td>
                      <td>{title}</td>
                      <td>{bpm}</td>
                      <td>{tagOne}</td>
                      <td>{tagTwo}</td>
                      <td>{`$${price}`}</td>
                      <td className={styles.actions}>
                        <Link to={`/admin/addproduct/${id}`}>
                          <FaEdit
                            size={20}
                            color="green"
                            style={{ float: 'left' }}
                          />
                        </Link>
                        <FaTrashAlt
                          size={18}
                          color="red"
                          style={{ float: 'right' }}
                          onClick={() =>
                            confirmDelete(id, imageUrl, srcUrl, category)
                          }
                        />
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  )
}
