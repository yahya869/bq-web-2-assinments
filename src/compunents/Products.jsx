import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../store/cartSlice'
import { useNavigate } from 'react-router-dom'

export default function Products() {
  const products = useSelector((state) => state.products.items)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleAdd = (product) => {
    dispatch(addToCart(product))
    navigate('/cart') // redirect to cart page after adding
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
         Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-11/12 md:w-3/4">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-gray-600 mt-2"><b>$  </b> {item.price}</p>
            <button
              onClick={() => handleAdd(item)}
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
