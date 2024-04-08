import React from 'react'
import Carousel from '@/helper/Carousels/Carousels'
import style from '@/styles/Home/Banner/Banner.module.scss'
import Link from 'next/link'

const Banner = () => {
	return (
		<div className={style.Banner}>
			<Carousel autoplaySpeed={4000} className={style.items} roundbuttons>
				{Array.from({ length: 5 }).map((_, index) => (
					<Link href='/' key={index} className={style.item}>
						<img
							src='https://img.ttcollection.ru/insecure/rs:fill:1283:0/g:ce/aHR0cHM6Ly9hcGkudHRjb2xsZWN0aW9uLnJ1L3N0b3JhZ2UvbWVkaWFsaWJyYXJ5LzY0ODQvMTMuanBn.webp'
							alt=''
						/>
						<div className={style.text}>
							<h3>Kоллекция весна лето 2024</h3>
						</div>
					</Link>
				))}
			</Carousel>
		</div>
	)
}

export default Banner
