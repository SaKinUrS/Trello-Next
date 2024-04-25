import { Loader as LoaderIcon } from 'lucide-react'

export const Loader: React.FC = () => {
	return (
		<div className='flex items-center justify-center'>
			<LoaderIcon className='animate-spin h-5 w-5 text-white' />
		</div>
	)
}
