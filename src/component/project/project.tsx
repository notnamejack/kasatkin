import { useEffect, useRef, useState } from 'react';
import { ReactComponent as Logo } from './assets/project-logo.svg';
import s from './project.module.scss';
import videoImg from './assets/video.jpg';
import clsx from 'clsx';
import AnimatedBorderBox from '../animated-border-box';

const startScroll = 1700;
export function Project() {
	const [scroll, setScroll] = useState<number>(0);
	const refProject = useRef<HTMLDivElement>(null);

	const bankRef = useRef<HTMLDivElement>(null);
	const carmaxTRef = useRef<HTMLDivElement>(null);
	const carmaxRef = useRef<HTMLDivElement>(null);
	const endRef = useRef<HTMLDivElement>(null);
	const gemRef = useRef<HTMLDivElement>(null);
	const trendRef = useRef<HTMLDivElement>(null);
	const turnRef = useRef<HTMLDivElement>(null);
	const proRef = useRef<HTMLDivElement>(null);
	const isMobile = window.matchMedia('(max-width: 1024px)').matches;

	useEffect(() => {
		if (scroll >= startScroll)
			refProject.current?.scrollTo(0, (scroll - startScroll) * 0.7);
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

	return (
		<section className={s.project}>
			{!isMobile && (
				<div className={s.container_list}>
					<div className={s.deactop_logo}>
						<Logo />
					</div>
					<div className={s.list_project} ref={refProject}>
						<div className={s.rigth}>
							<a
								href='https://carmax.kasatkin.io/'
								target='_blank'
								title='carmax'
								className={clsx(s.container_image, s.carmax)}>
								<div className={s.animated}><AnimatedBorderBox/></div>
								<div className={clsx(s.image)} ref={carmaxTRef}>
									<video
										className={''}
										autoPlay
										loop
										muted
										playsInline
										style={{
											width: '100%',
											height: '100%',
											transform: `scale(1.2) translateY(${
												(carmaxTRef?.current?.getBoundingClientRect()?.y ||
													100) * 0.01
											}px)`,
										}}>
										<source src='./video/car-max.mp4' type='video/mp4' />
									</video>
								</div>
								<div className={s.image_name}>
									<h3>Carmax</h3>
								</div>
							</a>
							<a
								href='https://pay.kasatkin.io'
								target='_blank'
								title='KASATKIN PAY'
								className={clsx(s.container_image, s.turn)}>
								<div className={s.animated}><AnimatedBorderBox color='#821ebf' width={470} height={470}/></div>
								<div className={clsx(s.image)} ref={turnRef}>
									<video
										className={''}
										autoPlay
										loop
										muted
										playsInline
										style={{
											width: '100%',
											height: '100%',
											transform: `scale(2) translateY(${
												(turnRef?.current?.getBoundingClientRect()?.y || 100) *
												0.01
											}px) translatex(50px)`,
										}}>
										<source src='./video/turn.mp4' type='video/mp4' />
									</video>
								</div>
								<div className={s.image_name}>
									<h3>KASATKIN PAY</h3>
								</div>
							</a>
							<div className={clsx(s.container_image, s.bank)}>
								<div className={s.animated}><AnimatedBorderBox color='#EF6D0D' width={436} height={515}/></div>
								<div className={clsx(s.image)} ref={bankRef}>
									<video
										className={''}
										autoPlay
										loop
										muted
										playsInline
										style={{
											width: '100%',
											height: '100%',
											transform: `scale(2) translateY(${
												(bankRef?.current?.getBoundingClientRect()?.y || 100) *
												0.01
											}px)`,
										}}>
										<source src='./video/bank.mp4' type='video/mp4' />
									</video>
								</div>
								<div className={s.image_name}>
									<h3>VAKKO WALLET</h3>
								</div>
							</div>
							<a
								href='https://alpha-dex.io/'
								target='_blank'
								title='alpha dex'
								className={clsx(s.container_image, s.trend)}>
								<div className={s.animated}><AnimatedBorderBox color='#AE8641'/></div>
								<div className={clsx(s.image)} ref={trendRef}>
									<video
										className={''}
										autoPlay
										loop
										muted
										playsInline
										style={{
											width: '100%',
											height: '100%',
											transform: `scale(1.3) translateY(${
												(trendRef?.current?.getBoundingClientRect()?.y || 100) *
												0.01
											}px)`,
										}}>
										<source src='./video/trend.mp4' type='video/mp4' />
									</video>
								</div>
								<div className={s.image_name}>
									<h3>aLPHA DEX</h3>
								</div>
							</a>
						</div>
						<div className={s.left}>
							<a
								href='https://xpad.pro/'
								target='_blank'
								title='xpad pro'
								className={clsx(s.container_image, s.end)}>
								<div className={s.animated}><AnimatedBorderBox color='#1D68FF'/></div>
								<div className={clsx(s.image)} ref={endRef}>
									<video
										className={''}
										autoPlay
										loop
										muted
										playsInline
										style={{
											width: '100%',
											height: '100%',
											transform: `scale(1.3) translateY(${
												(endRef?.current?.getBoundingClientRect()?.y || 100) *
												0.01
											}px)`,
										}}>
										<source src='./video/end.mp4' type='video/mp4' />
									</video>
								</div>
								<div className={s.image_name}>
									<h3>xpad pro</h3>
								</div>
							</a>
							<a
								href='https://carmax.kasatkin.io/'
								target='_blank'
								title='carmax'
								className={clsx(s.container_image, s.m_carmax)}>
								<div className={s.animated}><AnimatedBorderBox color='#929292' width={470} height={470}/></div>
								<div className={clsx(s.image)} ref={carmaxRef}>
									<video
										className={''}
										autoPlay
										loop
										muted
										playsInline
										style={{
											width: '100%',
											height: '100%',
											transform: `scale(2) translateY(${
												(carmaxRef?.current?.getBoundingClientRect()?.y ||
													100) * 0.01
											}px)`,
										}}>
										<source src='./video/carmax.mp4' type='video/mp4' />
									</video>
								</div>
								<div className={s.image_name}>
									<h3>Carmax</h3>
								</div>
							</a>
							<a
								href='https://ushi.pro/'
								target='_blank'
								title='USHI'
								className={clsx(s.container_image, s.gen)}>
								<div className={s.animated}><AnimatedBorderBox color='#CC6171'/></div>
								<div className={clsx(s.image)} ref={gemRef}>
									<video
										className={''}
										autoPlay
										loop
										muted
										playsInline
										style={{
											width: '100%',
											height: '100%',
											transform: `scale(1.3) translateY(${
												(gemRef?.current?.getBoundingClientRect()?.y || 100) *
												0.01
											}px)`,
										}}>
										<source src='./video/gem.mp4' type='video/mp4' />
									</video>
								</div>
								<div className={s.image_name}>
									<h3>USHI</h3>
								</div>
							</a>
							<a
								href='https://arkproduction.kasatkin.io/'
								target='_blank'
								title='ark production'
								className={clsx(s.container_image, s.video)}>
								<div className={s.animated}><AnimatedBorderBox color='#F11C49' width={470} height={470}/></div>
								<div className={clsx(s.image)} ref={proRef}>
									<video
										className={''}
										autoPlay
										loop
										muted
										playsInline
										style={{
											width: '100%',
											height: '100%',
											transform: `scale(2) translateY(${
												(proRef?.current?.getBoundingClientRect()?.y || 100) *
												0.01
											}px)`,
										}}>
										<source src='./video/pro.mp4' type='video/mp4' />
									</video>
								</div>
								<div className={s.image_name}>
									<h3>ARK PRODUCTION</h3>
								</div>
							</a>
						</div>
					</div>
				</div>
			)}
			<div className={s.after}></div>
			{isMobile && (
				<div className={s.container_mobile}>
					<h2>Портфолио</h2>
					<div className={s.image_modile}>
						<a
							href='https://carmax.kasatkin.io/'
							target='_blank'
							title='carmax'
							className={clsx(s.carmax, s.image)}>
							<video
								className={''}
								autoPlay
								loop
								muted
								playsInline
								style={{ width: '100%', height: '100%' }}>
								<source src='./video/carmax.mp4' type='video/mp4' />
							</video>
						</a>
						<h3>Carmax</h3>
					</div>
					<div className={s.image_modile}>
						<a
							href='https://xpad.pro/'
							target='_blank'
							title='xpad pro'
							className={clsx(s.carmax, s.image)}>
							<video
								className={''}
								autoPlay
								loop
								muted
								playsInline
								style={{ width: '100%', height: '100%' }}>
								<source src='./video/end.mp4' type='video/mp4' />
							</video>
						</a>
						<h3>xpad pro</h3>
					</div>
					<div className={s.image_modile}>
						<a
							href='https://pay.kasatkin.io'
							target='_blank'
							title='KASATKIN PAY'
							className={clsx(s.carmax, s.image)}>
							<video
								className={''}
								autoPlay
								loop
								muted
								playsInline
								style={{ width: '100%', height: '100%' }}>
								<source src='./video/turn.mp4' type='video/mp4' />
							</video>
						</a>
						<h3>KASATKIN PAY</h3>
					</div>
					<div className={s.image_modile}>
						<div className={clsx(s.carmax, s.image)}>
							<video
								className={''}
								autoPlay
								loop
								muted
								playsInline
								style={{ width: '100%', height: '100%' }}>
								<source src='./video/bank.mp4' type='video/mp4' />
							</video>
						</div>
						<h3>VAKKO WALLET</h3>
					</div>
					<div className={s.image_modile}>
						<a
							href='https://alpha-dex.io/'
							target='_blank'
							title='alpha dex'
							className={clsx(s.carmax, s.image)}>
							<video
								className={''}
								autoPlay
								loop
								muted
								playsInline
								style={{ width: '100%', height: '100%' }}>
								<source src='./video/trend.mp4' type='video/mp4' />
							</video>
						</a>
						<h3>alpha dex</h3>
					</div>
					<div className={s.image_modile}>
						<a
							href='https://arkproduction.kasatkin.io/'
							target='_blank'
							title='ark production'
							className={clsx(s.carmax, s.image)}>
							<video
								className={''}
								autoPlay
								loop
								muted
								playsInline
								style={{ width: '100%', height: '100%' }}>
								<source src='./video/pro.mp4' type='video/mp4' />
							</video>
						</a>
						<h3>ARK PRODUCTION</h3>
					</div>
				</div>
			)}
		</section>
	);
}
