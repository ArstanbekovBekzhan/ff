import React from 'react'
import { Carousel } from 'antd'
import style from './Carousels.module.scss'

interface CarouselsProps {
	children: React.ReactNode
	autoplaySpeed?: number
	autoplay?: boolean
	slidesToShow?: number
	buttons?: boolean
	roundbuttons?: boolean
	className?: string
}

const Carousels: React.FC<CarouselsProps> = ({
	children,
	autoplay = true,
	autoplaySpeed = 2500,
	slidesToShow = 1,
	buttons = true,
	className,
	roundbuttons = false,
}) => {
	return (
		<Carousel
			className={`${className} ${style.Carousel} ${
				roundbuttons ? style.roundbtn : ''
			}`}
			style={{ width: '100%' }}
			autoplay={autoplay}
			autoplaySpeed={autoplaySpeed}
			draggable
			slidesToShow={slidesToShow}
			dots={buttons}
		>
			{React.Children.map(children, (child, index) => (
				<div key={index}>{child}</div>
			))}
		</Carousel>
	)
}

export default Carousels
