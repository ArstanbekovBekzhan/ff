import { Category } from '@/types'
import { FC } from 'react'
import style from '@/styles/Categories/Categories.module.scss'


interface CategoriesNavBarProps {
	categories: Category[]
	onCategorySelect: (categoryId: number) => void
}

const CategoriesNavBar: FC<CategoriesNavBarProps> = ({
	categories,
	onCategorySelect,
}) => {
	return (
		<div className={style.navbar}>
			{categories.map(category => (
				<button key={category.id} onClick={() => onCategorySelect(category.id)}>
					{category.title}
				</button>
			))}
		</div>
	)
}

export default CategoriesNavBar
