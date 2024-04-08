import React from 'react'
import Skeleton from 'react-loading-skeleton'

const SkeletonLoader = () => {
	return (
		<div className='skeleton-loader'>
			<div className='skeleton-image'>
				<Skeleton height={200} />
			</div>
			<div className='skeleton-details'>
				<h3>
					<Skeleton width={150} />
				</h3>
				<div className='skeleton-price'>
					<Skeleton width={80} />
					<Skeleton width={80} />
				</div>
				<div className='skeleton-availability'>
					<Skeleton width={100} />
				</div>
			</div>
		</div>
	)
}

export default SkeletonLoader
