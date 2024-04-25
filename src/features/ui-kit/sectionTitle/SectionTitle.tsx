import { FC } from 'react'

interface ISectionTitleProps {
	title: string
}

export const SectionTitle: FC<ISectionTitleProps> = ({ title }) => {
	return (
		<div>
			<h1 className='text-3xl font-medium'>{title}</h1>
			<div className='my-3 h-0.5 bg-border w-full' />
		</div>
	)
}
