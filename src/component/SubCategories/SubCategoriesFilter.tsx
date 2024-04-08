'use client'
import { filterBrand } from '@/data'
import style from '@/styles/Categories/SubCategories.module.scss'

import Brand from './Brand'
import SearchSub from './Search'
import Сharacteristics from './Сharacteristics'

function SubCategoriesFilter() {
	return (
		<div className={style.filter}>
			<Сharacteristics data={filterBrand} />
			<SearchSub />
			<Brand data={filterBrand} />
		</div>
	)
}

export default SubCategoriesFilter
