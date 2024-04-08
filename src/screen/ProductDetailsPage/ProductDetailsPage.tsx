'use client'
import {
	ImageBox,
	DetailsTextBox,
	Sidebar,
	Similar,
} from '@/component/ProductDetails'
import style from '@/styles/Products/ProductDetails/ProductDetails.module.scss'
import { useParams } from 'next/navigation'

function ProductDetails() {
	const { id } = useParams()

	const images = [
		'https://cdn.shopify.com/s/files/1/2303/2711/files/2_e822dae0-14df-4cb8-b145-ea4dc0966b34.jpg?v=1617059123',
		'https://www.shutterstock.com/image-photo/product-photography-relax-natural-beauty-600nw-1993589426.jpg',
		'https://img.freepik.com/premium-photo/liquid-soap-with-sponge-on-green-background-spa-products-flatlay_124507-34002.jpg',
		'https://www.shutterstock.com/image-photo/product-photography-relax-natural-beauty-600nw-1993589426.jpg',
		'https://www.shutterstock.com/image-photo/product-photography-relax-natural-beauty-600nw-1993589426.jpg',
		'https://www.shutterstock.com/image-photo/product-photography-relax-natural-beauty-600nw-1993589426.jpg',
		'https://www.shutterstock.com/image-photo/product-photography-relax-natural-beauty-600nw-1993589426.jpg',
		'https://www.shutterstock.com/image-photo/product-photography-relax-natural-beauty-600nw-1993589426.jpg',
		'https://www.shutterstock.com/image-photo/product-photography-relax-natural-beauty-600nw-1993589426.jpg',
		'https://www.shutterstock.com/image-photo/product-photography-relax-natural-beauty-600nw-1993589426.jpg',
		'https://www.shutterstock.com/image-photo/product-photography-relax-natural-beauty-600nw-1993589426.jpg',
		'https://www.shutterstock.com/image-photo/product-photography-relax-natural-beauty-600nw-1993589426.jpg',
		'https://www.shutterstock.com/image-photo/product-photography-relax-natural-beauty-600nw-1993589426.jpg',
		'https://www.shutterstock.com/image-photo/product-photography-relax-natural-beauty-600nw-1993589426.jpg',
		'https://www.shutterstock.com/image-photo/product-photography-relax-natural-beauty-600nw-1993589426.jpg',
		'https://www.shutterstock.com/image-photo/product-photography-relax-natural-beauty-600nw-1993589426.jpg',
		'https://www.shutterstock.com/image-photo/product-photography-relax-natural-beauty-600nw-1993589426.jpg',
		'https://www.shutterstock.com/image-photo/product-photography-relax-natural-beauty-600nw-1993589426.jpg',
	]
	const dataText = {
		title:
			'Наколенник компрессионный для бега, тяжелой атлетики, дышащий для артрита',
		description:
			"Aqua, Sodium Coco-Sulfate, Cocamidopropyl Betaine, Mentha Piperita Leaf Extract (экстракт мяты перечной), Moringa Oleifera Leaf Extract (экстракт моринги), Sodium Cocoamphoacetate, Betaine (бетаин из сахарной свеклы), Glycerin (глицерин растительного происхождения), Sodium Chloride, Niacinamide (витамин В3), Calcium Pantothenate (витамин В5), Sodium Ascorbyl Phosphate (витамин С), Tocopheryl Acetate (витамин Е), Pyridoxine HCl (витамин В6), Maltodextrin, Sodium Starch Octenylsuccinate, Silica, Propanediol, Croton Lechleri Resin Extract (Dragon's Blood, сок дерева кротон Лехлера), Citrus Reticulata Peel Oil (эфирное масло мандарина), Mentha Piperita Oil (эфирное масло мяты перечной),Citric Acid, Benzyl Alcohol, Potassium Sorbate, Sodium Benzoate, Parfum, Linalool, Limonene.",
		grade: 4,
	}
	const hashtags = [
		'ЖидкоеМыло',
		'УходЗаКожей',
		'Антисептик',
		'АроматическоеМыло',
		'НатуральныеКомпоненты',
		'Мыло',
	]

	return (
		<div className={style.ProductDetails}>
			<div className={style.top}>
				<ImageBox images={images} />
				<DetailsTextBox dataText={dataText} />
				<Sidebar hashtags={hashtags} id={id}/>
			</div>
			<div className={style.bottom}>
				<Similar />
			</div>
		</div>
	)
}

export default ProductDetails
