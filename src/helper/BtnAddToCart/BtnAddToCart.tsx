import { addItemToCart, removeItemFromCart } from '@/redux/cart/reducer'
import { Card } from '@/types'
import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'

interface BtnAddToCartProps {
	product: Card
}

const BtnAddToCart: FC<BtnAddToCartProps> = ({ product }) => {
	const dispatch = useDispatch()

	const cartItems: Card[] = useSelector((state: any) => state.itemsInCart)
	const isInCart = cartItems.some(item => item.id === product.id)

	const handleClick = () => {
		if (!isInCart) {
			dispatch(addItemToCart(product))
		} else {
			dispatch(removeItemFromCart(product.id))
		}
	}

	return (
		<button
			onClick={handleClick}
			style={{
				background: isInCart ? '#fff' : '',
				color: isInCart ? '#000' : '',
			}}
		>
			{isInCart ? 'Убрать из корзины' : 'В корзину'}
		</button>
	)
}

export default BtnAddToCart
