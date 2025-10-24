import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState : {
        favoritesProducts: []
    },
    reducers : {
        addToFavorites: (state,action) => {
            const product = action.payload;
            const existingProduct = state.favoritesProducts.find(
                (item) => item.id === product.id
            );
             if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.favoritesProducts.push({ ...product, quantity: 1 });
            }
        },
        removeFromFavorites: (state, action) => {
            const productId = action.payload;
            state.favoritesProducts = state.favoritesProducts.filter(
                (item) => item.id !== productId
            );
        }
    }
})

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;