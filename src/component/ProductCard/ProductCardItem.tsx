import {
	decreaseQuantity,
	increaseQuantity,
	removeAllSelectedItemsFromCart,
	removeSelectedItemsFromCart,
	toggleSelectAllItems,
	toggleSelectedItem,
} from '@/redux/cart/reducer'
import style from '@/styles/ProductCard/ProductCard.module.scss'
import { Card } from '@/types'
import { DeleteOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'

const ProductCardItem = () => {
	const dispatch = useDispatch()
	const productCard = useSelector((state: any) => state.itemsInCart)
	const selectedItems = useSelector((state: any) => state.selectedItems)

	const toggleSelectAll = () => dispatch(toggleSelectAllItems())

	const deleteSelectedItems = () => {
		dispatch(removeAllSelectedItemsFromCart())
	}

	const deleteSelected = () => {
		dispatch(removeSelectedItemsFromCart(selectedItems))
	}

	const increaseProductQuantity = (productId: number) => {
		dispatch(increaseQuantity(productId))
	}

	const decreaseProductQuantity = (productId: number) => {
		dispatch(decreaseQuantity(productId))
	}
	return (
		<div className={style.left}>
			<div className={style.top}>
				<h2>Корзина</h2>
				<button disabled={!productCard.length} onClick={deleteSelectedItems}>
					Очистить корзину
				</button>

				<div className={style.actions}>
					<button disabled={!selectedItems.length} onClick={deleteSelected}>
						Удалить выбранные элементы
					</button>{' '}
					{productCard && (
						<label
							style={{
								cursor:
									productCard.length === productCard.length
										? ''
										: 'not-allowed',
							}}
						>
							<input
								type='checkbox'
								checked={
									selectedItems.length === productCard.length &&
									selectedItems.length
								}
								onChange={toggleSelectAll}
								className={style.checkbox}
							/>
							<span></span>
						</label>
					)}
				</div>
			</div>
			<div className={style.carditems}>
				{productCard.length ? (
					productCard.map((product: Card) => (
						<div key={product.id} className={style.carditem}>
							<div className={style.left}>
								<img src={product.images[0]} alt='' />
								<div className={style.textbox}>
									<h4>{product.title}</h4>
									<p>{product.description}</p>
								</div>
								<div className={style.quantity}>
									<button onClick={() => decreaseProductQuantity(product.id)}>
										{product.quantity && product.quantity > 1 ? (
											'-'
										) : (
											<DeleteOutlined />
										)}
									</button>{' '}
									<span>{product.quantity}</span>
									<button onClick={() => increaseProductQuantity(product.id)}>
										+
									</button>{' '}
								</div>
							</div>
							<label>
								<input
									type='checkbox'
									checked={selectedItems.includes(product.id)}
									onChange={() => dispatch(toggleSelectedItem(product.id))}
									className={style.checkbox}
								/>
								<span></span>
							</label>
						</div>
					))
				) : (
					<div className={style.emptyCart}>
						<span>Корзина пуста</span>
					</div>
				)}
			</div>
		</div>
	)
}

export default ProductCardItem
