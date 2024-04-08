import { cardsData } from '@/data'
import CardItem from '@/helper/CardItem/CardItem'
import style from '@/styles/Products/Products.module.scss'

const Products = () => {
	return (
		<div className={style.Products}>
			{cardsData.map(card => (
				<CardItem card={card} className={style.product} />
			))}
			<button className={style.more}>Показать ещё</button>
		</div>
	)
}

export default Products
