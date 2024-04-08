import style from '@/styles/ProductCard/ProductCard.module.scss'
import { Card } from '@/types'
import { useState } from 'react'
import { useSelector } from 'react-redux'

function ProductCardBuy() {
	const [showConfirmation, setShowConfirmation] = useState(false)

	const selectedItems = useSelector((state: any) => state.selectedItems)
	const productCard = useSelector((state: any) => state.itemsInCart)

	const handlePurchaseClick = () => {
		setShowConfirmation(true)
	}

	// Функция для вычисления общей суммы товаров
	const calculateTotal = () => {
		let total = 0
		productCard.forEach((product: Card) => {
			total +=
				(product.price / 100) * product.promotion * (product.quantity || 1)
		})
		return total
	}

	return (
		<div className={style.right}>
			<div>
				<button disabled={!selectedItems.length} onClick={handlePurchaseClick}>
					Купить сейчас
				</button>
			</div>
			{showConfirmation && (
				<div>
					<h2>Расчет ваших товаров:</h2>

					<div className={style.cardItems}>
						{productCard.map((product: Card) => {
							return (
								<div key={product.id} className={style.cardItem}>
									<h4>{product.title}</h4>
									{product.quantity && <p>Количество: {product.quantity}</p>}
									<p>
										{(product.price / 100) *
											product.promotion *
											(product.quantity || 1)}
										с
									</p>
								</div>
							)
						})}
					</div>
					<div className={style.bottomLine}>
						<p className={style.total}>Итого: {calculateTotal()} сом</p>
						<button>Оформите заказ</button>
					</div>
				</div>
			)}
		</div>
	)
}

export default ProductCardBuy
