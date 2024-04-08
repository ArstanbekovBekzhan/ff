'use client'
import {
	SubCategoriesContent,
	SubCategoriesFilter,
} from '@/component/SubCategories'
import style from '@/styles/Categories/SubCategories.module.scss'

function SubCategoriesDetails() {
	return (
		<div className={style.SubCategories}>
			<SubCategoriesFilter />
			<SubCategoriesContent />
		</div>
	)
}

export default SubCategoriesDetails
