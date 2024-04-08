import React from 'react'
import style from '@/styles/Layout/Footer/Footer.module.scss'
import Link from 'next/link'

interface Link {
	title?: string
	text: string
	to: string
	mysite?: boolean
}

interface ColumnLinks {
	Mysite: Link[]
	left: Link[]
	center: Link[]
	right: Link[]
}

const Footer: React.FC = () => {
	const columnLink: ColumnLinks = {
		Mysite: [
			{
				title: 'Навигация по сайту',
				text: 'Главное',
				to: '/',
				mysite: true,
			},
			{ text: 'Корзина', to: '/basket', mysite: true },
			{ text: 'Избранное', to: '/favorites', mysite: true },
		],
		left: [
			{ title: 'ПОКУПАТЕЛЯМ', text: 'Поддержка', to: 'http://google.com/' },
			{ text: 'Календарь распродаж', to: 'http://google.com/' },
			{ text: 'Китайская грамота', to: 'http://google.com/' },
		],
		center: [
			{
				title: 'ПАРТНЁРАМ',
				text: 'Продавайте на AliExpress',
				to: 'http://google.com/',
			},
			{ text: 'Аффилиатная программа', to: 'http://google.com/' },
			{ text: 'Блог для продавца', to: 'http://google.com/' },
		],
		right: [
			{ title: 'О КОМПАНИИ', text: 'Пресс-центр', to: 'http://google.com/' },
			{ text: 'Вакансии', to: 'http://google.com/' },
			{ text: 'AliTech', to: 'http://google.com/' },
			{ text: 'Блог о жизни компании', to: 'http://google.com/' },
		],
	}

	const renderColumn = (links: Link[]) => (
		<div className={style.column}>
			<span>{links[0]?.title}</span>
			{links.map(({ text, to, mysite }, index) =>
				mysite ? (
					<Link key={index} href={to}>
						{text}
					</Link>
				) : (
					<a key={index} href={to} target='_black'>
						{text}
					</a>
				)
			)}
		</div>
	)

	return (
		<footer className={style.footer}>
			<div className={style.links}>
				{['Mysite', 'left', 'center', 'right'].map(key =>
					renderColumn(columnLink[key as keyof ColumnLinks])
				)}
			</div>
		</footer>
	)
}

export default Footer
