import { Card } from '@/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CartState {
	itemsInCart: Card[]
	selectedItems: number[]
}

const initialState: CartState = {
	itemsInCart: [],
	selectedItems: [],
}

const cardSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItemToCart(state, action: PayloadAction<Card>) {
			state.itemsInCart.push({ ...action.payload, quantity: 1 })
		},
		removeItemFromCart(state, action: PayloadAction<number>) {
			state.itemsInCart = state.itemsInCart.filter(
				product => product.id !== action.payload
			)
		},
		removeAllSelectedItemsFromCart(state) {
			state.itemsInCart = []
			state.selectedItems = []
		},
		toggleSelectedItem(state, action: PayloadAction<number>) {
			const index = state.selectedItems.indexOf(action.payload)
			if (index === -1) {
				state.selectedItems.push(action.payload)
			} else {
				state.selectedItems.splice(index, 1)
			}
		},
		toggleSelectAllItems(state) {
			const allItemsSelected = state.itemsInCart.every(product =>
				state.selectedItems.includes(product.id)
			)
			if (allItemsSelected) {
				state.selectedItems = []
			} else {
				state.selectedItems = state.itemsInCart.map(product => product.id)
			}
		},
		clearSelectedItems(state) {
			state.selectedItems = []
		},
		removeSelectedItemsFromCart(state, action: PayloadAction<number[]>) {
			state.itemsInCart = state.itemsInCart.filter(
				product => !action.payload.includes(product.id)
			)
			state.selectedItems = state.selectedItems.filter(
				itemId => !action.payload.includes(itemId)
			)
		},
		increaseQuantity(state, action: PayloadAction<number>) {
			const item = state.itemsInCart.find(
				product => product.id === action.payload
			)
			if (item) {
				if (item.quantity === undefined) {
					item.quantity = 1
				} else {
					item.quantity++
				}
			}
		},

		decreaseQuantity(state, action: PayloadAction<number>) {
			const item = state.itemsInCart.find(
				product => product.id === action.payload
			)
			if (item && item.quantity !== undefined) {
				if (item.quantity > 1) {
					item.quantity--
				} else {
					state.itemsInCart = state.itemsInCart.filter(
						product => product.id !== action.payload
					)
				}
			}
		},
	},
})

export const {
	addItemToCart,
	removeItemFromCart,
	removeAllSelectedItemsFromCart,
	toggleSelectedItem,
	toggleSelectAllItems,
	clearSelectedItems,
	removeSelectedItemsFromCart,
	increaseQuantity,
	decreaseQuantity,
} = cardSlice.actions

export default cardSlice.reducer
