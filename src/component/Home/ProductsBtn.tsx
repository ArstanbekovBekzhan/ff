'use client'
import { FC, useState } from 'react'
import style from '@/styles/Products/ProductsBtn.module.scss'

const ProductsBtn: FC<{ cards: string[] }> = ({ cards }) => {
	const [activeIndex, setActiveIndex] = useState<number | null>(0)

	const handleButtonClick = (index: number) => {
		setActiveIndex(index === activeIndex ? null : index)
	}

	return (
		<div className={style.ProductsBtn}>
			{cards.map((card, index) => (
				<button
					key={index}
					className={index === activeIndex ? style.active : ''}
					onClick={() => handleButtonClick(index)}
				>
					{card}
				</button>
			))}
		</div>
	)
}

export default ProductsBtn
