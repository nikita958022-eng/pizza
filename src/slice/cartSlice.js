import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCard(state, action) {
            const pizza = action.payload;
            const existing = state.items.find((items) => items.id === pizza.id);
            if (existing) {
                existing.quantity += 1;
            } else {
                state.items.push({ ...pizza, quantity: 1 })
            }
        },
        incrementQuantity(state, action) {
            const item = state.items.find((item) => item.id === action.payload);
            if (item) {
                item.quantity += 1;
            }
        },
        decrementQuantity(state, action) {
            const item = state.items.find((item) => item.id === action.payload);
            if (item) {
                item.quantity -= 1;
                if (item.quantity <= 0) {
                    state.items = state.items.filter((i) => i.id !== action.payload);
                }
            }
        },
        removeFromCart(state, action) {
            state.items = state.items.filter((i) => i.id !== action.payload)
        },
        clearCart(state) {
            state.items = [];
        }

    },

}

)
export const { addToCard,incrementQuantity, decrementQuantity, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;