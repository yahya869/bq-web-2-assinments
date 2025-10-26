import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [
    { id: 1, name: 'Laptop', price: 15000 },
    { id: 2, name: 'Headphones', price: 200 },
    { id: 3, name: 'Keyboard', price: 3000 },
    { id: 4, name: 'Mause', price: 1000 },
    { id: 5, name: 'Remote', price: 250 },
    { id: 6, name: 'Charger', price: 400 },
  ],
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
})

export default productsSlice.reducer
