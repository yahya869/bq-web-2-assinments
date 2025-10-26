import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload
      const existing = state.cartItems.find((i) => i.id === item.id)

      if (existing) {
        existing.quantity += 1
      } else {
        state.cartItems.push({ ...item, quantity: 1 })
      }

      state.totalQuantity += 1
      state.totalPrice += item.price
    },

    removeFromCart: (state, action) => {
      const itemId = action.payload
      const existing = state.cartItems.find((i) => i.id === itemId)
      if (!existing) return

      state.totalQuantity -= existing.quantity
      state.totalPrice -= existing.price * existing.quantity
      state.cartItems = state.cartItems.filter((i) => i.id !== itemId)
    },

    clearCart: (state) => {
      state.cartItems = []
      state.totalQuantity = 0
      state.totalPrice = 0
    },
  },
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer
