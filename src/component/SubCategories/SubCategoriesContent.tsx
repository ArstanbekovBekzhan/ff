import { cardsData } from '@/data'
import CardItem from '@/helper/CardItem/CardItem'
import style from '@/styles/Categories/SubCategories.module.scss'

function SubCategoriesContent() {
	return (
		<div className={style.content}>
			{cardsData.map(card => (
				<CardItem card={card} className={style.product} />
			))}
			<button className={style.more}>Показать ещё</button>
		</div>
	)
}

export default SubCategoriesContent
