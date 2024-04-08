import { cardsData } from '@/data'
import CardItem from '@/helper/CardItem/CardItem'
import Carousels from '@/helper/Carousels/Carousels'
import style from '@/styles/Home/Stock/Stock.module.scss'

export default function Stock() {
	return (
		<div className={style.Stock}>
			<div className={style.title}>
				<h2>Акции</h2>
			</div>
			<Carousels slidesToShow={5} buttons={false} autoplay>
				{cardsData.map(card => (
					<CardItem card={card} />
				))}
			</Carousels>
		</div>
	)
}
