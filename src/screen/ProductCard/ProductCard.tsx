'use client'

import React from 'react'
import style from '@/styles/ProductCard/ProductCard.module.scss'

import { ProductCardItem, ProductCardBuy } from '@/component/ProductCard'

const ProductCard: React.FC = () => {
	return (
		<div className={style.ProductCard}>
			<ProductCardItem />
			<ProductCardBuy />
		</div>
	)
}

export default ProductCard
