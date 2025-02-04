import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import s from './create.module.scss';
import { useEffect, useRef } from 'react';

export function Create() {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		// При необходимости можно найти canvas внутри контейнера и применить transform.
		// Здесь предполагается, что DotLottieReact рендерит <canvas>.
		if (containerRef.current) {
			const canvas = containerRef.current.querySelector('canvas');
			if (canvas) {
				// Применим трансформацию для изменения соотношения (например, растянем по высоте на 20%)
				canvas.style.transform = 'scale(1, 1.5)';
				// Устанавливаем origin, чтобы трансформация происходила от верхнего левого угла
				canvas.style.transformOrigin = 'top left';
			}
		}
	}, []);

	return (
		<section className={s.create}>
			<div className={s.container_title}>
				<h1>
					Делаем лендинги, <strong>которые работают на результат</strong>
				</h1>
			</div>
			<div className={s.container_video} ref={containerRef}>
				{/* <DotLottieReact
					src={'./video/video.json'}
					loop
					autoplay
					style={{
						width: '100%',
						height: '100%',
					}}
				/> */}
				<video className={s.video} autoPlay loop muted playsInline style={{width: '100%', height: '100%'}}>
					<source src='./video/gem.mp4' type='video/mp4'/>
				</video>
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
