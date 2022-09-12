import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from '../../types';

const initialState: IProduct[] = []

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct> ) => {
      state.push(action.payload)
    },
    removeFromCart: (state, action: PayloadAction<{id: number}> ) => {
      const product = state.find(p => p.id === action.payload.id)
      if (confirm(`Are you sure you want to remove ${product?.title} from the cart?`)) {
        return state.filter(p => p.id !== action.payload.id)
      }
      return state
    },
  },
})

export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer