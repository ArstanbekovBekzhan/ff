import style from '@/styles/Categories/Categories.module.scss'
import { Category } from '@/types'
import Link from 'next/link'
import { FC } from 'react'

interface CategoriesCardProps {
	id: number | null
	subcategories: Category[]
}

const CategoriesCard: FC<CategoriesCardProps> = ({ id, subcategories }) => {
	return (
		<div className={style.subcategories}>
			{subcategories.map(subc => (
				<Link
					href={`/category/${id == null ? 1 : id}/${subc.title}/${subc.id}`}
					key={subc.id}
					className={style.item}
					style={{ background: `url(${subc.image})` }}
				>
					<span>{subc.title}</span>
				</Link>
			))}
			{id}
		</div>
	)
}

export default CategoriesCard
