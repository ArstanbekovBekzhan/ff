'use client'
import style from '@/styles/CardItem/CardItem.module.scss'
import { Card } from '@/types'
import Link from 'next/link'
import React, { FC, useEffect, useState } from 'react'
import BtnAddToCart from '../BtnAddToCart/BtnAddToCart'
import Carousel from '../Carousels/Carousels'
import SkeletonLoader from './SkeletonLoader'

interface Props {
	card: Card
	className?: string
}

const CardItem: FC<Props> = ({ card, className }) => {
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		setIsVisible(true)
	}, [])

	return (
		<div
			className={`${style.item} ${className} ${isVisible ? style.visible : ''}`}
		>
			<Link href={`/product/${card.id}`}>
				{card ? (
					<React.Fragment>
						<Carousel
							buttons
							autoplaySpeed={10000}
							className={style.item_image}
							roundbuttons
						>
							{card.images.map((img: string, index: number) => (
								<img key={index} src={img} alt='' />
							))}
						</Carousel>
						<h3>{card.title}</h3>
						<div className={style.price}>
							<span>KGS{(card.price / 100) * card.promotion} </span>
							<span>KGS {card.price}</span>
						</div>
						<div className={style.availableCart}>
							<span className={card.available ? style.available : ''}>
								{card.available ? 'В наличии' : 'Нет в наличии'}
							</span>
						</div>
					</React.Fragment>
				) : (
					<SkeletonLoader />
				)}
			</Link>
			<BtnAddToCart product={card} />
		</div>
	)
}

export default CardItem
