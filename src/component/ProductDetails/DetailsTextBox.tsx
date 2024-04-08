// DetailsTextBox.tsx
import React, { FC } from 'react'
import { Rate } from 'antd'
import style from '@/styles/Products/ProductDetails/ProductDetails.module.scss'

interface DetailsTextBoxProps {
	dataText: {
		title: string
		description: any
		grade: number
	}
}

const DetailsTextBox: FC<DetailsTextBoxProps> = ({ dataText }) => {
	const { title, description, grade } = dataText

	const formatText = (text: any): JSX.Element[] => {
		const regex = /\((.*?)\)/g
		const parts: JSX.Element[] = []
		let lastIndex = 0
		let match

		while ((match = regex.exec(text)) !== null) {
			parts.push(
				<span key={lastIndex}>{text.substring(lastIndex, match.index)}</span>
			)
			parts.push(
				<span key={match.index} className={style.blueText}>
					{match[0]}
				</span>
			)
			lastIndex = regex.lastIndex
		}

		parts.push(<span key={lastIndex}>{text.substring(lastIndex)}</span>)

		return parts
	}

	return (
		<div className={style.textBox}>
			<h3>{title}</h3>
			<p>{formatText(description)}</p>
			<div className={style.grade}>
				<span>Оценка: </span>
				<Rate allowHalf disabled defaultValue={grade} />
			</div>
		</div>
	)
}

export default DetailsTextBox
