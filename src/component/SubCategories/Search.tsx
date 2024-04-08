import { Input } from 'antd'
import style from '@/styles/Categories/SubCategories.module.scss'

const { Search } = Input
function SearchSub() {
	return (
		<Search
        className={style.search}
			placeholder='Поиск товаров '
			enterButton='Поиск'
			size='large'
			loading={false}
			style={{ width: 500 }}
		/>
	)
}

export default SearchSub
