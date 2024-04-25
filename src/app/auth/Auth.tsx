'use client'

import { DASHBOARD_PAGES } from '@config/pages-url.config'
import { Button, Field, SectionTitle } from '@features/ui-kit'
import { IAuthForm } from '@models/auth.models'
import { authService } from '@services/auth.service'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'

interface IAuthProps {}

export const Auth: React.FC<IAuthProps> = () => {
	const { register, handleSubmit, reset } = useForm<IAuthForm>({
		mode: 'onChange'
	})
	const [isLoginForm, setIsLoginForm] = useState(false)

	const { push } = useRouter()

	const { mutate } = useMutation({
		mutationKey: ['auth'],
		mutationFn: (data: IAuthForm) =>
			authService.main(isLoginForm ? 'login' : 'register', data),
		onSuccess: () => {
			toast.success('Вы вошли в систему')
			reset()
			push(DASHBOARD_PAGES.HOME)
		}
	})

	const onSubmit: SubmitHandler<IAuthForm> = data => {
		mutate(data)
	}

	return (
		<section className='flex min-h-screen'>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='w-1/4 m-auto shadow bg-sidebar rounded-xl p-layout'
			>
				<SectionTitle title='Авторизация' />
				<Field
					id='email'
					label='Email'
					placeholder='Email'
					type='email'
					extra='mb-4'
					{...register('email', {
						required: 'Email обязателен'
					})}
				/>
				<Field
					id='password'
					label='Пароль'
					placeholder='Пароль'
					type='password'
					{...register('password', {
						required: 'Пароль обязателен'
					})}
					extra='mb-6'
				/>
				<div className='flex justify-center items-center gap-5'>
					<Button onClick={() => setIsLoginForm(true)}>Login</Button>
					<Button onClick={() => setIsLoginForm(false)}>SignUp</Button>
				</div>
			</form>
		</section>
	)
}
