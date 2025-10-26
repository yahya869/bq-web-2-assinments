import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, clearCart } from '../store/cartSlice'
import { useNavigate } from 'react-router-dom'

export default function CartPage() {
  const { cartItems, totalQuantity, totalPrice } = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-600 mb-4">Your cart is empty.</p>
          <button
            onClick={() => navigate('/Products')}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Back to Products
          </button>
        </div>
      ) : (
        <div className="w-11/12 md:w-1/2 bg-white rounded-xl shadow-md p-6">
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center border-b pb-3"
              >
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-600">
                    Qty: {item.quantity} | ${item.price * item.quantity}
                  </p>
                </div>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6 text-right space-y-2">
            <p>Total Items: <b>{totalQuantity}</b></p>
            <p className="text-lg font-semibold">Total Price: ${totalPrice}</p>
          </div>

          <div className="flex justify-between mt-6">
            <button
              onClick={() => dispatch(clearCart())}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded"
            >
              Clear Cart
            </button>
            <button
              onClick={() => alert('Checkout successful!')}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
            >
              Checkout
            </button>
          </div>

          <button
            onClick={() => navigate('/Products')}
            className="mt-6 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            ← Continue Shopping
          </button>
        </div>
      )}
    </div>
  )
}
