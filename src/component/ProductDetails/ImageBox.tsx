'use client'
import React, { FC, useState } from 'react'
import style from '@/styles/Products/ProductDetails/ProductDetails.module.scss'

interface ImageBoxProps {
	images: string[] | null
}

const ImageBox: FC<ImageBoxProps> = ({ images }) => {
	const [mainImage, setMainImage] = useState<string | null>(
		images && images.length > 0 ? images[0] : null
	)
	const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
		images && images.length > 0 ? 0 : null
	)

	const handleImageHover = (img: string, index: number) => {
		setMainImage(img)
		setSelectedImageIndex(index)
	}

	const handlePrevImage = () => {
		if (selectedImageIndex !== null && selectedImageIndex > 0) {
			const newIndex = selectedImageIndex - 1
			setMainImage(images![newIndex])
			setSelectedImageIndex(newIndex)
		}
	}

	const handleNextImage = () => {
		if (
			selectedImageIndex !== null &&
			selectedImageIndex < images!.length - 1
		) {
			const newIndex = selectedImageIndex + 1
			setMainImage(images![newIndex])
			setSelectedImageIndex(newIndex)
		}
	}

	return (
		<div className={style.imageBox}>
			<div className={style.choiceImg}>
				{images?.map((img, index) => (
					<button
						key={index}
						style={{
							backgroundImage: `url(${img})`,
							borderColor:
								selectedImageIndex === index ? ' black' : 'transparent',
						}}
						onMouseEnter={() => handleImageHover(img, index)}
						onClick={() => handleImageHover(img, index)}
					></button>
				))}
			</div>
			<div className={style.mainImg}>
				{mainImage && <img src={mainImage} alt={`Main Image`} />}
				<div className={style.navigationButtons}>
					<button
						onClick={handlePrevImage}
						disabled={
							!images?.length ||
							selectedImageIndex === null ||
							selectedImageIndex === 0
						}
					>
						Прошлая
					</button>
					<button
						onClick={handleNextImage}
						disabled={
							!images?.length ||
							selectedImageIndex === null ||
							selectedImageIndex === images.length - 1
						}
					>
						Следующая
					</button>
				</div>
			</div>
		</div>
	)
}

export default ImageBox
