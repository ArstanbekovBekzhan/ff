'use client'
import { CategoriesCard, CategoriesNavBar } from '@/component/Categories'
import { categories, subcategories } from '@/data'
import style from '@/styles/Categories/Categories.module.scss'
import { useState } from 'react'

function CategoriesPage() {
	const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
		null
	)

	const handleCategorySelect = (categoryId: number) => {
		setSelectedCategoryId(categoryId)
	}
	return (
		<div className={style.categories}>
			<CategoriesNavBar
				categories={categories}
				onCategorySelect={handleCategorySelect}
			/>
			<CategoriesCard id={selectedCategoryId} subcategories={subcategories} />
		</div>
	)
}

export default CategoriesPage
