import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import s from './order.module.scss';
import { useCallback } from 'react';
import { useForm } from '../../hook/useForm';
import { ReactComponent as Telega } from './assets/telega.svg';

interface IForm{
	name: string | undefined,
	phone: string | undefined
}

export function Order () {

	const { form, handleInputChange, setForm } = useForm<IForm>({
		name: undefined,
		phone: undefined,
	});

	const formSubmit = useCallback(
		(e: React.ChangeEvent<HTMLFormElement>) => {
			e.preventDefault();
			if (form.name && form.phone) {
				console.log(`${form.name} ${form.phone}`)
			}
			form.name === undefined && setForm({ ...form, name: '' });
			form.phone === undefined && setForm({ ...form, phone: '' });
		},
		[form]
	);

	return(
		<section className={s.order}>
			<div className={s.order_container}>
				<div className={s.form_background}>
					<DotLottieReact
						src={'./video/order.json'}
						loop
						autoplay
						style={{
							width: '100%',
							height: '100%',
						}}
					/>
				</div>
				<div className={s.order_form}>
					<form onSubmit={formSubmit} className={s.group}>
						<h2>Напишите нам чтобы узнать цену</h2>
						<div className={s.group_input}>
							<div className={s.input_item}>
								<input
									name='name'
									type="text"
									id='name'
									placeholder='Имя'
									value={form.name}
									onChange={handleInputChange}
									/>
								<label htmlFor="name" title='Имя'/>
							</div>
							<div className={s.input_item}>
								<input
									name='phone'
									type="phone"
									id='phone'
									placeholder='Номер телефона'
									value={form.phone}
									onChange={handleInputChange}/>
								<label htmlFor="phone" title='Номер телефона'/>
							</div>
						</div>
						<div className={s.input_footer_btn}>
							<button>Отправить</button>
							<p>или</p>
							<a href='https://t.me/kasatkinfoundation'>
								<Telega />
								Связаться через телеграм
							</a>
						</div>
					</form>
				</div>
			</div>
		</section>
	)
}