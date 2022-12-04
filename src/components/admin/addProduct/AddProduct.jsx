import React, { useEffect, useState } from 'react'
import { db, storage } from '../../../firebase/config'
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from 'firebase/storage'
import { Card } from '../../cards/Card'
import styles from './AddProduct.module.scss'
import { toast } from 'react-toastify'
import { addDoc, collection, doc, setDoc, Timestamp } from 'firebase/firestore'
import { useNavigate, useParams } from 'react-router'
import { Loader } from '../../loader/Loader'
import { useSelector } from 'react-redux'
import { selectProducts } from '../../../redux/features/productSlice'

const categories = [
  { id: 1, name: 'Beat' },
  { id: 2, name: 'Sample' },
  { id: 3, name: 'Sound' },
  { id: 4, name: 'Kit' },
]

export const AddProduct = () => {
  const { id } = useParams()

  const detectForm = (id, f1, f2) => {
    if (id === 'ADD') {
      return f1
    } else {
      return f2
    }
  }

  const products = useSelector(selectProducts)
  const productEdit = products.find((item) => item.id === id)

  const [title, setTitle] = useState(() => {
    if (id === 'ADD') {
      return ''
    } else {
      return productEdit.title
    }
  })
  const [imageUrl, setImageUrl] = useState(() => {
    if (id === 'ADD') {
      return ''
    } else {
      return productEdit.imageUrl
    }
  })
  const [price, setPrice] = useState(() => {
    if (id === 'ADD') {
      return ''
    } else {
      return productEdit.price
    }
  })
  const [category, setCategory] = useState('')

  const [srcUrl, setSrcUrl] = useState(() => {
    if (id === 'ADD') {
      return ''
    } else {
      return productEdit.srcUrl
    }
  })
  const [description, setDescription] = useState(() => {
    if (id === 'ADD') {
      return ''
    } else {
      return productEdit.description
    }
  })
  const [bpm, setBpm] = useState(() => {
    if (id === 'ADD') {
      return ''
    } else {
      return productEdit.bpm
    }
  })

  const [chooseCat, setChooseCat] = useState(false)

  const navigate = useNavigate()

  const [imageUploadProgress, setImageUploadProgress] = useState(0)
  const [srcUploadProgress, setSrcUploadProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  const handlePriceChange = (e) => {
    e.preventDefault()
    setPrice(e.target.value)
  }
  const handleTitleChange = (e) => {
    e.preventDefault()
    setTitle(e.target.value)
  }
  const handleCategoryChange = (e) => {
    e.preventDefault()
    setCategory(e.target.value)
  }
  const handleDescriptionChange = (e) => {
    e.preventDefault()
    setDescription(e.target.value)
  }
  const handleBpmChange = (e) => {
    e.preventDefault()
    setBpm(e.target.value)
  }
  const handleImageChange = (e) => {
    e.preventDefault()
    const file = e.target.files[0]
    const storageRef = ref(storage, `images/${Date.now()}${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        setImageUploadProgress(progress)
      },
      (error) => {
        toast.error(error.message)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageUrl(downloadURL)
          toast.success('Upload succussfully')
        })
      }
    )
  }
  const handleSrcChange = (e) => {
    e.preventDefault()
    const file = e.target.files[0]
    const storageRef = ref(storage, `${category}/${Date.now()}${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file)
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        setSrcUploadProgress(progress)
      },
      (error) => {
        toast.error(error.message)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setSrcUrl(downloadURL)
          toast.success('Upload succussfully')
        })
      }
    )
  }

  const addProduct = (e) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const docRef = addDoc(collection(db, `${category}`), {
        title: title,
        imageUrl: imageUrl,
        price: Number(price),
        category: category,
        srcUrl: srcUrl,
        description: description,
        bpm: Number(bpm),
        createdAt: Timestamp.now().toDate(),
      })
      setIsLoading(false)
      setTitle('')
      setImageUrl('')
      setPrice('')
      setCategory('')
      setSrcUrl('')
      setDescription('')
      setBpm('')
      setImageUploadProgress(0)
      setSrcUploadProgress(0)
      toast.success('Uploaded successfully!')
      navigate('/admin/viewproducts')
    } catch (error) {
      toast.error(error.message)
      setIsLoading(false)
    }
  }

  const editProduct = (e) => {
    e.preventDefault()
    setIsLoading(true)

    if (imageUrl !== productEdit.imageUrl) {
      const storageRef = ref(storage, productEdit.imageUrl)
      deleteObject(storageRef)
    }
    if (srcUrl !== productEdit.srcUrl) {
      const storageRef = ref(storage, productEdit.srcUrl)
      deleteObject(storageRef)
    }

    try {
      setDoc(doc(db, `${category}`, id), {
        title: title,
        imageUrl: imageUrl,
        price: Number(price),
        category: category,
        srcUrl: srcUrl,
        description: description,
        bpm: Number(bpm),
        createdAt: productEdit.createdAt,
        editedAt: Timestamp.now().toDate(),
      })
      setIsLoading(false)
      toast.success('Edited successfully')
      navigate('/admin/viewproducts')
    } catch (error) {
      toast.error(error.message)
      setIsLoading(false)
    }
  }

  return (
    <div className={styles.product}>
      <h1>{detectForm(id, 'Add new stuff', 'Edit stuff')}</h1>
      <Card>
        <form onSubmit={detectForm(id, addProduct, editProduct)}>
          <label>Add category:</label>
          <select
            required={true}
            name="category"
            value={category}
            onChange={(e) => {
              setChooseCat(true)
              handleCategoryChange(e)
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
          {chooseCat && (
            <>
              <label>Add title:</label>
              <input
                type="text"
                placeholder="Title"
                required={true}
                name="title"
                value={title}
                onChange={(e) => handleTitleChange(e)}
              ></input>
              <label>Add image:</label>
              <Card cardStyles={styles.group}>
                {imageUploadProgress === 0 ? null : (
                  <div className={styles.progress}>
                    <div
                      className={styles.progressBar}
                      style={{ width: `${imageUploadProgress}%` }}
                    >
                      {imageUploadProgress < 100
                        ? `Uploading ${imageUploadProgress}%`
                        : `Uploaded ${imageUploadProgress}%`}
                    </div>
                  </div>
                )}

                <input
                  type="file"
                  placeholder="image"
                  accept="image/*"
                  name="image"
                  onChange={(e) => handleImageChange(e)}
                />
                {imageUrl === '' ? null : (
                  <input
                    type="text"
                    name="imageUrl"
                    disabled
                    value={imageUrl}
                  />
                )}
              </Card>
              <Card cardStyles={styles.group}>
                {srcUploadProgress === 0 ? null : (
                  <div className={styles.progress}>
                    <div
                      className={styles.progressBar}
                      style={{ width: `${srcUploadProgress}%` }}
                    >
                      {srcUploadProgress < 100
                        ? `Uploading ${srcUploadProgress}%`
                        : `Uploaded ${srcUploadProgress}%`}
                    </div>
                  </div>
                )}
                <label>Add track:</label>
                <input
                  type="file"
                  placeholder="file"
                  accept="audio/*"
                  name="src"
                  onChange={(e) => handleSrcChange(e)}
                />
                {srcUrl === '' ? null : (
                  <input type="text" name="srcUrl" disabled value={srcUrl} />
                )}
              </Card>
              <label>Add price:</label>
              <input
                type="number"
                placeholder="Price"
                required={true}
                name="price"
                value={price}
                onChange={(e) => handlePriceChange(e)}
              ></input>
              <label>Add bpm:</label>
              <input
                type="number"
                placeholder="BPM"
                required={true}
                name="bpm"
                value={bpm}
                onChange={(e) => handleBpmChange(e)}
              ></input>
              <label>Add description:</label>
              <textarea
                name="description"
                required={true}
                value={description}
                onChange={(e) => handleDescriptionChange(e)}
                placeholder="Describe the stuff"
                rows="10"
                cols="20"
              ></textarea>
              {isLoading ? (
                <button type="submit" className={styles.btnLoading}>
                  {isLoading ? <Loader /> : `Add`}
                </button>
              ) : (
                <button type="submit" className={styles.btn}>
                  {detectForm(id, 'Add this', 'Edit this')}
                </button>
              )}
            </>
          )}
        </form>
      </Card>
    </div>
  )
}
