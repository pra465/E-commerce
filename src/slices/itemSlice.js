import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
);

const items = createSlice({
  name: 'items',
  initialState: {
    productList: [],
    cartItems: [],
    searchedProducts: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    addSearchedProducts: (state, action) => {
      state.searchedProducts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {})
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.productList = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        console.error('Error fetching products:', action.error.message);
      });
  },
});

export const { addToCart, addSearchedProducts } = items.actions;

export default items.reducer;
