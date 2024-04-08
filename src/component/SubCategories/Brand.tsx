import { Brand as BrandType } from '@/types'
import { Select } from 'antd'
import React from 'react'
const { Option } = Select

interface BrandProps {
	data: BrandType[]
}

const Brand: React.FC<BrandProps> = ({ data }) => {
	return (
		<Select defaultValue='Бренды' style={{ minWidth: 120 }}>
			{data.map((brand: BrandType) => (
				<Option key={brand.id} value={brand.name}>
					{brand.name}
				</Option>
			))}
		</Select>
	)
}

export default Brand