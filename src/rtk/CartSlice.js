import { createSlice } from '@reduxjs/toolkit'


export const CartSlice = createSlice({
  name: 'CartSlice',
  initialState:[],
  reducers: {
    addToCart: (state,action) => {
        const findProduct = state.find((product) => product.id === action.payload.id)
        if(findProduct){
         findProduct.quantaty += 1
        }else{
         const productclone = {...action.payload,quantaty:1}
            state.push(productclone)
        }
    },
    removeFromCart: (state,action) => {
      return state.filter((p) => p.id !== action.payload.id)
    },

  },
})

export const { addToCart, removeFromCart } = CartSlice.actions

export default CartSlice.reducer