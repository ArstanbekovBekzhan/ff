import { Brand } from '@/types'
import { Select } from 'antd'
import React from 'react'
const { Option } = Select

interface BrandProps {
	data: Brand[]
}

const Сharacteristics: React.FC<BrandProps> = ({ data }) => {
	return (
		<Select defaultValue='Характеристики' style={{ minWidth: 120 }}>
			{data.map((brand: Brand) => (
				<Option key={brand.id} value={brand.name}>
					{brand.name}
				</Option>
			))}
		</Select>
	)
}

export default Сharacteristics
