import React from 'react'
import style from '@/styles/Products/ProductDetails/ProductDetails.module.scss'
import Link from 'next/link'

interface SidebarProps {
	hashtags: string[],
	id: string | string[],
}

function Sidebar({ hashtags, id }: SidebarProps) {

	return (
		<div className={style.Sidebar}>
			<div>
				<h3 className={style.price}>179.53 с</h3>
				<p className={style.line}>460.18 с</p>
				<div className={style.btns}>
					<button>Купить сейчас</button>
				</div>
				<p className={style.pieces}>Осталось 5 штук</p>
			</div>
			<div className={style.hashtags}>
				{hashtags.map((tag, index) => (
					<Link href={`/#${tag}`} key={index} className={style.hashtag}>
						#{tag}
					</Link>
				))}
			</div>
		</div>
	)
}

export default Sidebar
