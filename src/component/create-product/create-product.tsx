import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import s from './create-product.module.scss';

export function CreateProduct () {
	const [scrollY, setScrollY] = useState(0);
	const [thirdVisible, setThirdVisible] = useState(false);
	const thirdBlockRef = useRef<HTMLDivElement>(null);

	const [start, setStart] = useState(500);
	const [relative, setRelative] = useState(0);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	useLayoutEffect(() => {
		setStart(thirdBlockRef?.current?.getBoundingClientRect()?.y || 500)
	},[])

	useLayoutEffect(() => {
		setRelative(thirdBlockRef?.current?.getBoundingClientRect()?.y || 0)
		if(start < (thirdBlockRef?.current?.getBoundingClientRect()?.y || 0)){
			setStart(thirdBlockRef?.current?.getBoundingClientRect()?.y || 500)
		}
	},[thirdBlockRef?.current?.getBoundingClientRect()?.y])

	const handleScroll = () => {
		setScrollY(window.scrollY);
	};

	// Отслеживание появления третьего блока в зоне видимости
	useEffect(() => {
		const observer = new IntersectionObserver(
		([entry]) => {
			setThirdVisible(entry.isIntersecting);
		},
		{ threshold: 0.1 }
		);
		if (thirdBlockRef.current) {
		observer.observe(thirdBlockRef.current);
		}
		return () => {
		if (thirdBlockRef.current) {
			observer.unobserve(thirdBlockRef.current);
		}
		};
	}, []);

	const transformTop = useMemo(() => {
		let count = 125 - (scrollY * 0.6);
		return count;
	}, [start, relative]);

	const transformBottom = useMemo(() => {
		let count = -125 + (scrollY * 0.6);
		return count;
	}, [start, relative]);

	const height = useMemo(() => {
		let count = 750
		if(scrollY >= 500)
			count = 750 - (scrollY * 0.5);
		return count;
	}, [start, relative]);

	// Стили для первого блока: смещение вверх и исчезание
	const blockOneStyle: React.CSSProperties = {
		transform: `translateY(${transformTop >= 0 ? transformTop : 0}px)`,
	};

	const blockOneTextStyle: React.CSSProperties = {
		opacity: Math.max(1 - scrollY / 100, 0),
	}

	const blockTwoStyle: React.CSSProperties = {
		height: `${height >= 350 ? height : 350}px`,
	};

	// Стили для первого блока: смещение вниз и исчезание
	const blockThreeStyle: React.CSSProperties = {
		transform: `translateY(${transformBottom <= 0 ? transformBottom : 0}px)`,
	};

	return(
		<section className={s.create}>
			<div className={s.block_one} style={blockOneStyle}>
				<div className={s.container_title} style={blockOneTextStyle}>
					<h1>
						Делаем лендинги, <strong>которые работают на результат</strong>
					</h1>
				</div>
			</div>
			<div className={s.block_two} style={blockTwoStyle}>
				<div className={s.block_video}>
					<video className={s.video} autoPlay loop muted playsInline style={{width: '100%', height: '750vh'}}>
						<source src='./video/start.mp4' type='video/mp4'/>
					</video>
				</div>
			</div>
			<div className={s.block_three} ref={thirdBlockRef} style={blockThreeStyle}>
				<div className={s.goal}>
					<h2>
						ПОМОГАЕМ БИЗНЕСУ ДОСТИЧЬ <strong>ЦЕЛЕЙ</strong>
					</h2>
					<div className={s.goal_container}>
						<div className={s.animi}>
							<video className={s.video} autoPlay loop muted playsInline style={{width: '100%', height: '100%'}}>
								<source src='./video/video.mp4' type='video/mp4'/>
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
			</div>
		</section>
	)
}