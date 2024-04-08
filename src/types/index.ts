export interface Card {
	id: number
	images: string[]
	title: string
	description: string
	price: number
	promotion: number
	available: boolean
	quantity?: number
}
export interface Category {
	id: number
	title: string
	image?: string
}
export interface Brand {
	id: number
	name: string
}
