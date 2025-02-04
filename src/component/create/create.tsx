import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import s from './create.module.scss';
import { useEffect, useRef, useState } from 'react';

const startScroll = 100;
const endScroll = 300;

export function Create() {
	const containerRef = useRef<HTMLDivElement>(null);
	const [scroll, setScroll] = useState<number>(0);

	useEffect(() => {
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

	return (
		<section className={s.create}>
			<div className={s.container_title}>
				<h1>
					Делаем лендинги, <strong>которые работают на результат</strong>
				</h1>
			</div>
			<div className={s.container_video} ref={containerRef}>
				<div className={s.video}>
					<video autoPlay loop muted playsInline style={{width: '100%', height: '100%'}}>
						<source src='./video/gem.mp4' type='video/mp4'/>
					</video>
				</div>
			</div>
			<div className={s.goal}>
				<h2>
					ПОМОГАЕМ БИЗНЕСУ ДОСТИЧЬ <strong>ЦЕЛЕЙ</strong>
				</h2>
				<div className={s.goal_container}>
					<div className={s.animi}>

						<video className={s.video} autoPlay loop muted playsInline style={{width: '100%', height: '100%'}}>
							<source src='./video/gem.mp4' type='video/mp4'/>
						</video>
					</div>
					<div className={s.result}>
						<ul className={s.result_items}>
							<li className={s.result_item}>
								<div className={s.item_text}>
									<h3>Конверсия</h3>
									<p>Увеличится на</p>
								</div>
								<h3 className={s.progress}>3%</h3>
							</li>
							<li className={s.result_item}>
								<div className={s.item_text}>
									<h3>SEO</h3>
									<p>Увеличит выручку на</p>
								</div>
								<h3 className={s.progress}>10%</h3>
							</li>
						</ul>
						<ul className={s.result_items}>
							<li className={s.result_item}>
								<div className={s.item_text}>
									<h3>CRM</h3>
									<p>Ускорение процессов на</p>
								</div>
								<h3 className={s.progress}>7%</h3>
							</li>
							<li className={s.result_item}>
								<div className={s.item_text}>
									<h3>Онлайн касса</h3>
									<p>Увеличит выручку на</p>
								</div>
								<h3 className={s.progress}>8%</h3>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
