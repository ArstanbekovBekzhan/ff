import { Banner, Stock, Products, ProductsBtn } from '@/component/Home'

function HomePage() {
	const cards = ['Распродажа', 'Топ-товары', 'Рекомендуем вам']
	return (
		<>
			<Banner />
			<Stock />
			<ProductsBtn cards={cards} />
			<Products />
		</>
	)
}

export default HomePage
