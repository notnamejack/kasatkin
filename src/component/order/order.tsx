import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import s from './order.module.scss';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useForm } from '../../hook/useForm';
import { ReactComponent as Telega } from './assets/telega.svg';
import { ReactComponent as TelegaBlack } from './assets/telega-black.svg';
import { ReactComponent as Watsapp } from './assets/watsapp.svg';
import { ReactComponent as Logo } from './assets/logo.svg';
import { ReactComponent as LogoTab } from './assets/logo-tab.svg';
import { ReactComponent as LogoMobile } from './assets/logo-mobile.svg';
import axios from "axios";

interface IForm{
	name: string | undefined,
	phone: string | undefined
}
const startScroll = 5600;
const startMScroll = 3000;
export function Order () {

	const { form, handleInputChange, setForm } = useForm<IForm>({
		name: undefined,
		phone: undefined,
	});

	const [send, setSend] = useState(false);

	const [scroll, setScroll] = useState<number>(0);
	const refProject = useRef<HTMLDivElement>(null);
	const isMobile = window.matchMedia("(max-width: 550px)").matches;

	useEffect(() => {
		if (scroll >= (!isMobile ? startScroll : startMScroll))
			refProject.current?.scrollTo(0, (scroll - (!isMobile ? startScroll : startMScroll)) * 0.7);
		else refProject.current?.scrollTo(0, 0);
	}, [scroll]);

	useEffect(() => {
		window.addEventListener('scroll', changeScroll);
		return () => {
			window.removeEventListener('scroll', changeScroll);
		};
	}, []);

	const changeScroll = () => {
		setScroll(window.scrollY);
	};

	const formSubmit = useCallback(
		(e: React.ChangeEvent<HTMLFormElement>) => {
			e.preventDefault();
			if (form.name && form.phone) {
				setSend(true);
				let formData = new FormData();
				formData.append('name', form.name);
				formData.append('phone', form.phone);
				formData.append('project_type', 'landing');

				axios({
					method: 'POST',
					url: `https://kasatkin.io/api/sendmail/kasatkin`,
					data: formData,
				  }).then(resp => {
					  switch(resp.status){
						case 200:{
						  return resp.data
						}
						default:{
						  return null;
						}
					  }
					})
					.catch(error => console.log(error.response))
					.finally(() => {
						setSend(false);
						setForm({ ...form, name: '', phone: '' })
					})
			}
			form.name === undefined && setForm({ ...form, name: '' });
			form.phone === undefined && setForm({ ...form, phone: '' });
		},
		[form]
	);

	return(
		<section className={s.order}>
			<div className={s.sticky} ref={refProject}>
				<div className={s.order_container}>
					<div className={s.form_background}>
						<video className={s.video} autoPlay loop muted playsInline style={{ height: '150vh'}}>
							<source src='./video/order.mp4' type='video/mp4'/>
						</video>
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
								<button disabled={send}>Отправить</button>
								<p>или</p>
								<a href='https://t.me/kasatkinfoundation'>
									<Telega />
									Связаться через телеграм
								</a>
							</div>
						</form>
					</div>
				</div>
				<div className={s.footer}>
					<h2>Начните реализацию своего проекта прямо сейчас</h2>
					<div className={s.footer_link}>
						<div className={s.message}>
							<a href='https://t.me/kasatkinfoundation'><TelegaBlack /></a>
							<a href='https://api.whatsapp.com/send/?phone=79932494825&text&type=phone_number&app_absent=0'><Watsapp /></a>
						</div>
						<div className={s.logo}>
							<Logo className={s.desctop}/>
							<LogoTab className={s.tab}/>
							<LogoMobile className={s.mobile}/>
						</div>
						<div className={s.police}>
							<a href='https://kasatkin.io/ru/privacy'>Политика конфиденцальности</a>
							<p>Все права защищены</p>
							<a href="mailto:info@kasatkin.io">info@kasatkin.io</a>
						</div>
					</div>
				</div>
			</div>
			<div className={s.after}></div>
		</section>
	)
}