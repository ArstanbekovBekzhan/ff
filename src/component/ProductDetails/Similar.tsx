'use client'
import { cardsData } from '@/data'
import CardItem from '@/helper/CardItem/CardItem'
import style from '@/styles/Products/Products.module.scss'

const Similar = () => {
	return (
		<div className={style.Products}>
			{cardsData.map(card => (
				<CardItem key={card.id} card={card} className={style.product} />
			))}
			<button className={style.more}>Показать ещё</button>
		</div>
	)
}

export default Similar
