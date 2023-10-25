import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    // cart: [],
    cart: [
        {
            pizzaId: 12,
            name: "Meditrranean",
            quantity: 2,
            unitPrice: 16,
            totalPrice: 32
        }
    ]
}

const cartslice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem(state, action) {
            // payload = newItem
            state.cart.push(action.payload);
        },
        deleteItem(state, action) {
            // payload = pizzaId
            state.cart = state.cart.filter((item) => item.pizzaId !== action.payload)

        },
        increaseItemQuantity(state, action) {
            const item = state.cart.find((item) => item.pizzaId === action.payload)
            item.quantity++;
            item.totalPrice = item.quantity * item.unitPrice;
        },
        decreaseeItemQuantity(state, action) {
            const item = state.cart.find((item) => item.pizzaId === action.payload)
            item.quantity--
            item.totalPrice = item.quantity * item.unitPrice;
        },
        clearCart(state, action) {
            state.cart = []
        }
    }
}
)


export const {addItem, deleteItem, increaseItemQuantity, decreaseeItemQuantity, clearCart} = cartslice.actions

export default cartslice.reducer