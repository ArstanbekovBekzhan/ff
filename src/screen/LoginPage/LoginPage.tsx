'use client'
import React, { useState } from 'react'
import { Form, Input, Button, notification } from 'antd'
import { useRouter } from 'next/navigation'
import style from '@/styles/Login/Login.module.scss'

const LoginPage: React.FC = () => {
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const router = useRouter()

	const onFinish = () => {
		console.log('Email:', email)
		console.log('Password:', password)

		if (email === 'admin@admin.com' && password === 'admin') {
			notification.success({
				message: 'Успешный вход',
				description: 'Вы успешно вошли в систему!',
			})
			router.push('/cabinet')
		} else {
			notification.error({
				message: 'Ошибка входа',
				description: 'Неправильное имя пользователя или пароль!',
			})
		}
	}

	return (
		<div className={style.Login}>
			<div className={style.container}>
				<h2>Вход</h2>
				<Form
					name='basic'
					initialValues={{ remember: true }}
					onFinish={onFinish}
				>
					<Form.Item
						label='Email'
						name='email'
						rules={[
							{
								type: 'email',
								message: 'Введите правильный email!',
							},
							{
								required: true,
								message: 'Пожалуйста, введите email!',
							},
						]}
					>
						<Input value={email} onChange={e => setEmail(e.target.value)} />
					</Form.Item>

					<Form.Item
						label='Пароль'
						name='password'
						rules={[{ required: true, message: 'Пожалуйста, введите пароль!' }]}
					>
						<Input.Password
							value={password}
							onChange={e => setPassword(e.target.value)}
						/>
					</Form.Item>

					<Form.Item>
						<Button type='primary' htmlType='submit'>
							Войти
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	)
}

export default LoginPage
