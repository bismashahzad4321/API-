import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import axios from 'axios'

const ProductList = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await axios.get("https://api.escuelajs.co/api/v1/products")
      console.log(response)
      setData(response.data)
    }

    catch (err) {
      // console.error(err)
      setError("Failed to fetch products")
    }
    finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>
  return (
    <div>

      <ProductCard  data={data} />

    </div>
  )
}

export default ProductList