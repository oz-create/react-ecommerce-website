import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ProductService from "../../services/productService";

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async (_, thunkAPI) => {
    try {
      const response = await ProductService.getProduct();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    status: "idle", // idle | loading | succeeded | failed
    loading: false,
    error: null,
    categories: [],
    brands: [],
    ratings: [],
    cartProducts: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.cartProducts.find(
        (item) => item.id === product.id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cartProducts.push({ ...product, quantity: 1 });
      }
    },
    decreaseFromCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.cartProducts.find(
        (item) => item.id === product.id
      );
      if (existingProduct.quantity > 1) {
        existingProduct.quantity -= 1;
      } else {
        state.cartProducts = state.cartProducts.filter(
          (item) => item.id !== product.id
        );
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.cartProducts = state.cartProducts.filter(
        (item) => item.id !== productId
      );
    },
    clearCart: (state) => {
      state.cartProducts = [];
    },
    addMultipleToCart: (state, action) => {
      const { product, quantity } = action.payload;
      const existingProduct = state.cartProducts.find((item) => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        state.cartProducts.push({ ...product, quantity });
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        const datas = action.payload.products;
        state.products = datas;
        state.categories = [...new Set(datas.map((item) => item.category))];
        state.brands = [...new Set(datas.map((item) => item.brand))];
        state.ratings = [...new Set(datas.map((item) => item.rating))];
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { addToCart, decreaseFromCart, removeFromCart, clearCart, addMultipleToCart } =
  productSlice.actions;
export default productSlice.reducer;
