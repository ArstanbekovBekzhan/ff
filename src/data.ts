const cardsData = [
	{
		id: 1,
		images: [
			'https://doctorhead.ru/images/cards/brands/Marshall/Major%20IV/MAJOR-IV_20.jpg',
			'https://doctorhead.ru/images/cards/brands/Marshall/Major%20IV/MAJOR-IV_20.jpg',
			'https://doctorhead.ru/images/cards/brands/Marshall/Major%20IV/MAJOR-IV_20.jpg',
		],
		title: 'Название товара 1',
		description:
			'Это описание товара содержит информацию о его характеристиках, особенностях и преимуществах. Может включать в себя такие данные как материал изготовления, размеры, цвета, функциональные возможности и другие детали, которые помогут покупателю понять, насколько товар соответствует его потребностям и ожиданиям.',
		price: 100,
		promotion: 30,
		available: true,
	},
	{
		id: 2,
		images: [
			'https://doctorhead.ru/images/cards/brands/Marshall/Major%20IV/MAJOR-IV_20.jpg',
			'https://doctorhead.ru/images/cards/brands/Marshall/Major%20IV/MAJOR-IV_20.jpg',
			'https://doctorhead.ru/images/cards/brands/Marshall/Major%20IV/MAJOR-IV_20.jpg',
		],
		title: 'Название товара 2',
		description:
			'Это описание товара содержит информацию о его характеристиках, особенностях и преимуществах. Может включать в себя такие данные как материал изготовления, размеры, цвета, функциональные возможности и другие детали, которые помогут покупателю понять, насколько товар соответствует его потребностям и ожиданиям.',
		price: 200,
		promotion: 20,
		available: false,
	},
	{
		id: 3,
		images: [
			'https://doctorhead.ru/images/cards/brands/Marshall/Major%20IV/MAJOR-IV_20.jpg',
			'https://doctorhead.ru/images/cards/brands/Marshall/Major%20IV/MAJOR-IV_20.jpg',
			'https://doctorhead.ru/images/cards/brands/Marshall/Major%20IV/MAJOR-IV_20.jpg',
		],
		title: 'Название товара 1',
		description:
			'Это описание товара содержит информацию о его характеристиках, особенностях и преимуществах. Может включать в себя такие данные как материал изготовления, размеры, цвета, функциональные возможности и другие детали, которые помогут покупателю понять, насколько товар соответствует его потребностям и ожиданиям.',
		price: 100,
		promotion: 30,
		available: true,
	},
	{
		id: 4,
		images: [
			'https://doctorhead.ru/images/cards/brands/Marshall/Major%20IV/MAJOR-IV_20.jpg',
			'https://doctorhead.ru/images/cards/brands/Marshall/Major%20IV/MAJOR-IV_20.jpg',
			'https://doctorhead.ru/images/cards/brands/Marshall/Major%20IV/MAJOR-IV_20.jpg',
		],
		title: 'Название товара 2',
		description:
			'Это описание товара содержит информацию о его характеристиках, особенностях и преимуществах. Может включать в себя такие данные как материал изготовления, размеры, цвета, функциональные возможности и другие детали, которые помогут покупателю понять, насколько товар соответствует его потребностям и ожиданиям.',
		price: 200,
		promotion: 20,
		available: false,
	},
	{
		id: 5,
		images: [
			'https://doctorhead.ru/images/cards/brands/Marshall/Major%20IV/MAJOR-IV_20.jpg',
			'https://doctorhead.ru/images/cards/brands/Marshall/Major%20IV/MAJOR-IV_20.jpg',
			'https://doctorhead.ru/images/cards/brands/Marshall/Major%20IV/MAJOR-IV_20.jpg',
		],
		title: 'Название товара 1',
		description:
			'Это описание товара содержит информацию о его характеристиках, особенностях и преимуществах. Может включать в себя такие данные как материал изготовления, размеры, цвета, функциональные возможности и другие детали, которые помогут покупателю понять, насколько товар соответствует его потребностям и ожиданиям.',
		price: 100,
		promotion: 30,
		available: true,
	},
	{
		id: 6,
		images: [
			'https://doctorhead.ru/images/cards/brands/Marshall/Major%20IV/MAJOR-IV_20.jpg',
			'https://doctorhead.ru/images/cards/brands/Marshall/Major%20IV/MAJOR-IV_20.jpg',
			'https://doctorhead.ru/images/cards/brands/Marshall/Major%20IV/MAJOR-IV_20.jpg',
		],
		title: 'Название товара 2',
		description:
			'Это описание товара содержит информацию о его характеристиках, особенностях и преимуществах. Может включать в себя такие данные как материал изготовления, размеры, цвета, функциональные возможности и другие детали, которые помогут покупателю понять, насколько товар соответствует его потребностям и ожиданиям.',

		price: 200,
		promotion: 20,
		available: false,
	},
	{
		id: 7,
		images: [
			'https://doctorhead.ru/images/cards/brands/Marshall/Major%20IV/MAJOR-IV_20.jpg',
			'https://doctorhead.ru/images/cards/brands/Marshall/Major%20IV/MAJOR-IV_20.jpg',
			'https://doctorhead.ru/images/cards/brands/Marshall/Major%20IV/MAJOR-IV_20.jpg',
		],
		title: 'Название товара 1',
		description:
			'Это описание товара содержит информацию о его характеристиках, особенностях и преимуществах. Может включать в себя такие данные как материал изготовления, размеры, цвета, функциональные возможности и другие детали, которые помогут покупателю понять, насколько товар соответствует его потребностям и ожиданиям.',
		price: 100,
		promotion: 30,
		available: true,
	},
	{
		id: 8,
		images: [
			'https://doctorhead.ru/images/cards/brands/Marshall/Major%20IV/MAJOR-IV_20.jpg',
			'https://doctorhead.ru/images/cards/brands/Marshall/Major%20IV/MAJOR-IV_20.jpg',
			'https://doctorhead.ru/images/cards/brands/Marshall/Major%20IV/MAJOR-IV_20.jpg',
		],
		title: 'Название товара 2',
		description:
			'Это описание товара содержит информацию о его характеристиках, особенностях и преимуществах. Может включать в себя такие данные как материал изготовления, размеры, цвета, функциональные возможности и другие детали, которые помогут покупателю понять, насколько товар соответствует его потребностям и ожиданиям.',
		price: 200,
		promotion: 20,
		available: false,
	},
]
const categories = [
	{
		id: 1,
		title: 'Электроника',
	},
	{
		id: 2,
		title: 'Одежды',
	},
	{
		id: 3,
		title: 'Посуда',
	},
	{
		id: 4,
		title: 'Мыло',
	},
	{
		id: 1,
		title: 'Электроника',
	},
	{
		id: 2,
		title: 'Одежды',
	},
	{
		id: 3,
		title: 'Посуда',
	},
	{
		id: 4,
		title: 'Мыло',
	},
	{
		id: 1,
		title: 'Электроника',
	},
	{
		id: 2,
		title: 'Одежды',
	},
	{
		id: 3,
		title: 'Посуда',
	},
	{
		id: 4,
		title: 'Мыло',
	},
	{
		id: 1,
		title: 'Электроника',
	},
	{
		id: 2,
		title: 'Одежды',
	},
	{
		id: 3,
		title: 'Посуда',
	},
	{
		id: 4,
		title: 'Мыло',
	},
	{
		id: 1,
		title: 'Электроника',
	},
	{
		id: 2,
		title: 'Одежды',
	},
	{
		id: 3,
		title: 'Посуда',
	},
	{
		id: 4,
		title: 'Мыло',
	},
	{
		id: 1,
		title: 'Электроника',
	},
	{
		id: 2,
		title: 'Одежды',
	},
	{
		id: 3,
		title: 'Посуда',
	},
	{
		id: 4,
		title: 'Мыло',
	},
]
const subcategories = [
	{
		id: 1,
		title: 'Телефоны',
		image: 'https://basetop.ru/wp-content/uploads/2022/02/phone.jpg',
	},
	{
		id: 2,
		title: 'Ноутбуки',
		image:
			'https://resizer.mail.ru/p/8d9fb024-5ba8-5ad7-a968-5071860dc82a/AQAK17UiWNCx0W3cWg26lPM3uamdEhoQgpeMYJXLVp2vSlw5HHw-hjOUbQgfROd4qqhUT4ZCVOE14NMyf17-tMPYFk8.jpg',
	},
	{
		id: 3,
		title: 'Компьютеры',
		image:
			'https://fons.pibig.info/uploads/posts/2023-05/thumbs/1685153642_fons-pibig-info-p-igrovoi-kompyuter-fon-pinterest-80.jpg',
	},
	{
		id: 4,
		title: 'Дроны',
		image:
			'https://djimsk.ru/guides/wp-content/uploads/2021/05/AdobeStock_185898613-953x536.jpeg',
	},
	{
		id: 1,
		title: 'Телефоны',
		image: 'https://basetop.ru/wp-content/uploads/2022/02/phone.jpg',
	},
	{
		id: 2,
		title: 'Ноутбуки',
		image:
			'https://resizer.mail.ru/p/8d9fb024-5ba8-5ad7-a968-5071860dc82a/AQAK17UiWNCx0W3cWg26lPM3uamdEhoQgpeMYJXLVp2vSlw5HHw-hjOUbQgfROd4qqhUT4ZCVOE14NMyf17-tMPYFk8.jpg',
	},
	{
		id: 3,
		title: 'Компьютеры',
		image:
			'https://fons.pibig.info/uploads/posts/2023-05/thumbs/1685153642_fons-pibig-info-p-igrovoi-kompyuter-fon-pinterest-80.jpg',
	},
	{
		id: 4,
		title: 'Дроны',
		image:
			'https://djimsk.ru/guides/wp-content/uploads/2021/05/AdobeStock_185898613-953x536.jpeg',
	},
	{
		id: 1,
		title: 'Телефоны',
		image: 'https://basetop.ru/wp-content/uploads/2022/02/phone.jpg',
	},
	{
		id: 2,
		title: 'Ноутбуки',
		image:
			'https://resizer.mail.ru/p/8d9fb024-5ba8-5ad7-a968-5071860dc82a/AQAK17UiWNCx0W3cWg26lPM3uamdEhoQgpeMYJXLVp2vSlw5HHw-hjOUbQgfROd4qqhUT4ZCVOE14NMyf17-tMPYFk8.jpg',
	},
	{
		id: 3,
		title: 'Компьютеры',
		image:
			'https://fons.pibig.info/uploads/posts/2023-05/thumbs/1685153642_fons-pibig-info-p-igrovoi-kompyuter-fon-pinterest-80.jpg',
	},
	{
		id: 4,
		title: 'Дроны',
		image:
			'https://djimsk.ru/guides/wp-content/uploads/2021/05/AdobeStock_185898613-953x536.jpeg',
	},
	{
		id: 1,
		title: 'Телефоны',
		image: 'https://basetop.ru/wp-content/uploads/2022/02/phone.jpg',
	},
	{
		id: 2,
		title: 'Ноутбуки',
		image:
			'https://resizer.mail.ru/p/8d9fb024-5ba8-5ad7-a968-5071860dc82a/AQAK17UiWNCx0W3cWg26lPM3uamdEhoQgpeMYJXLVp2vSlw5HHw-hjOUbQgfROd4qqhUT4ZCVOE14NMyf17-tMPYFk8.jpg',
	},
	{
		id: 3,
		title: 'Компьютеры',
		image:
			'https://fons.pibig.info/uploads/posts/2023-05/thumbs/1685153642_fons-pibig-info-p-igrovoi-kompyuter-fon-pinterest-80.jpg',
	},
	{
		id: 4,
		title: 'Дроны',
		image:
			'https://djimsk.ru/guides/wp-content/uploads/2021/05/AdobeStock_185898613-953x536.jpeg',
	},
	{
		id: 1,
		title: 'Телефоны',
		image: 'https://basetop.ru/wp-content/uploads/2022/02/phone.jpg',
	},
	{
		id: 2,
		title: 'Ноутбуки',
		image:
			'https://resizer.mail.ru/p/8d9fb024-5ba8-5ad7-a968-5071860dc82a/AQAK17UiWNCx0W3cWg26lPM3uamdEhoQgpeMYJXLVp2vSlw5HHw-hjOUbQgfROd4qqhUT4ZCVOE14NMyf17-tMPYFk8.jpg',
	},
	{
		id: 3,
		title: 'Компьютеры',
		image:
			'https://fons.pibig.info/uploads/posts/2023-05/thumbs/1685153642_fons-pibig-info-p-igrovoi-kompyuter-fon-pinterest-80.jpg',
	},
	{
		id: 4,
		title: 'Дроны',
		image:
			'https://djimsk.ru/guides/wp-content/uploads/2021/05/AdobeStock_185898613-953x536.jpeg',
	},
	{
		id: 1,
		title: 'Телефоны',
		image: 'https://basetop.ru/wp-content/uploads/2022/02/phone.jpg',
	},
	{
		id: 2,
		title: 'Ноутбуки',
		image:
			'https://resizer.mail.ru/p/8d9fb024-5ba8-5ad7-a968-5071860dc82a/AQAK17UiWNCx0W3cWg26lPM3uamdEhoQgpeMYJXLVp2vSlw5HHw-hjOUbQgfROd4qqhUT4ZCVOE14NMyf17-tMPYFk8.jpg',
	},
	{
		id: 3,
		title: 'Компьютеры',
		image:
			'https://fons.pibig.info/uploads/posts/2023-05/thumbs/1685153642_fons-pibig-info-p-igrovoi-kompyuter-fon-pinterest-80.jpg',
	},
	{
		id: 4,
		title: 'Дроны',
		image:
			'https://djimsk.ru/guides/wp-content/uploads/2021/05/AdobeStock_185898613-953x536.jpeg',
	},
	{
		id: 1,
		title: 'Телефоны',
		image: 'https://basetop.ru/wp-content/uploads/2022/02/phone.jpg',
	},
	{
		id: 2,
		title: 'Ноутбуки',
		image:
			'https://resizer.mail.ru/p/8d9fb024-5ba8-5ad7-a968-5071860dc82a/AQAK17UiWNCx0W3cWg26lPM3uamdEhoQgpeMYJXLVp2vSlw5HHw-hjOUbQgfROd4qqhUT4ZCVOE14NMyf17-tMPYFk8.jpg',
	},
	{
		id: 3,
		title: 'Компьютеры',
		image:
			'https://fons.pibig.info/uploads/posts/2023-05/thumbs/1685153642_fons-pibig-info-p-igrovoi-kompyuter-fon-pinterest-80.jpg',
	},
	{
		id: 4,
		title: 'Дроны',
		image:
			'https://djimsk.ru/guides/wp-content/uploads/2021/05/AdobeStock_185898613-953x536.jpeg',
	},
	{
		id: 1,
		title: 'Телефоны',
		image: 'https://basetop.ru/wp-content/uploads/2022/02/phone.jpg',
	},
	{
		id: 2,
		title: 'Ноутбуки',
		image:
			'https://resizer.mail.ru/p/8d9fb024-5ba8-5ad7-a968-5071860dc82a/AQAK17UiWNCx0W3cWg26lPM3uamdEhoQgpeMYJXLVp2vSlw5HHw-hjOUbQgfROd4qqhUT4ZCVOE14NMyf17-tMPYFk8.jpg',
	},
	{
		id: 3,
		title: 'Компьютеры',
		image:
			'https://fons.pibig.info/uploads/posts/2023-05/thumbs/1685153642_fons-pibig-info-p-igrovoi-kompyuter-fon-pinterest-80.jpg',
	},
	{
		id: 4,
		title: 'Дроны',
		image:
			'https://djimsk.ru/guides/wp-content/uploads/2021/05/AdobeStock_185898613-953x536.jpeg',
	},
	{
		id: 1,
		title: 'Телефоны',
		image: 'https://basetop.ru/wp-content/uploads/2022/02/phone.jpg',
	},
	{
		id: 2,
		title: 'Ноутбуки',
		image:
			'https://resizer.mail.ru/p/8d9fb024-5ba8-5ad7-a968-5071860dc82a/AQAK17UiWNCx0W3cWg26lPM3uamdEhoQgpeMYJXLVp2vSlw5HHw-hjOUbQgfROd4qqhUT4ZCVOE14NMyf17-tMPYFk8.jpg',
	},
	{
		id: 3,
		title: 'Компьютеры',
		image:
			'https://fons.pibig.info/uploads/posts/2023-05/thumbs/1685153642_fons-pibig-info-p-igrovoi-kompyuter-fon-pinterest-80.jpg',
	},
	{
		id: 4,
		title: 'Дроны',
		image:
			'https://djimsk.ru/guides/wp-content/uploads/2021/05/AdobeStock_185898613-953x536.jpeg',
	},
	{
		id: 1,
		title: 'Телефоны',
		image: 'https://basetop.ru/wp-content/uploads/2022/02/phone.jpg',
	},
	{
		id: 2,
		title: 'Ноутбуки',
		image:
			'https://resizer.mail.ru/p/8d9fb024-5ba8-5ad7-a968-5071860dc82a/AQAK17UiWNCx0W3cWg26lPM3uamdEhoQgpeMYJXLVp2vSlw5HHw-hjOUbQgfROd4qqhUT4ZCVOE14NMyf17-tMPYFk8.jpg',
	},
	{
		id: 3,
		title: 'Компьютеры',
		image:
			'https://fons.pibig.info/uploads/posts/2023-05/thumbs/1685153642_fons-pibig-info-p-igrovoi-kompyuter-fon-pinterest-80.jpg',
	},
	{
		id: 4,
		title: 'Дроны',
		image:
			'https://djimsk.ru/guides/wp-content/uploads/2021/05/AdobeStock_185898613-953x536.jpeg',
	},
]
const filterBrand = [
	{
		id: 1,
		name: 'Apple',
	},
	{
		id: 2,
		name: 'Samsung',
	},
	{
		id: 3,
		name: 'XIAOMI',
	},
	{
		id: 4,
		name: 'ASUS',
	},
	{
		id: 5,
		name: 'HUAWEI',
	},
	{
		id: 6,
		name: 'POCO',
	},
]
const languages = [
	{
		id: 1,
		name: 'ру',
	},
	{
		id: 2,
		name: 'en',
	},
]
export { cardsData, categories, filterBrand, subcategories, languages }
