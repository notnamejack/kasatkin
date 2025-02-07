import { useEffect, useRef, useState } from 'react';
import { ReactComponent as Logo } from './assets/project-logo.svg';
import s from './project.module.scss';
import carmaxImg from './assets/carmax.jpg';
import turnImg from './assets/turn.jpg';
import bankImg from './assets/bank.jpg';
import trendImg from './assets/trend.jpg';
import endImg from './assets/end.jpg';
import mCarmaxImg from './assets/m-carmax.jpg';
import genImg from './assets/gen.jpg';
import videoImg from './assets/video.jpg';
import clsx from 'clsx';

const startScroll = 1900;
export function Project() {
	const [scroll, setScroll] = useState<number>(0);
	const refProject = useRef<HTMLDivElement>(null);

	const bankRef = useRef<HTMLDivElement>(null);
	const carmaxRef = useRef<HTMLDivElement>(null);
	const endRef = useRef<HTMLDivElement>(null);
	const gemRef = useRef<HTMLDivElement>(null);
	const trendRef = useRef<HTMLDivElement>(null);
	const turnRef = useRef<HTMLDivElement>(null);

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
			<div className={s.container_list}>
				<div className={s.deactop_logo}>
					<Logo />
				</div>
				<div className={s.list_project} ref={refProject}>
					<div className={s.rigth}>
						<div
							className={clsx(s.carmax, s.image)}
							style={{ backgroundImage: `url(${carmaxImg})` }}></div>
						<div className={clsx(s.turn, s.image)} ref={turnRef}>
							<video className={""} autoPlay loop muted playsInline
								style={{width: '100%', height: '100%',transform: `scale(2) translateY(${(turnRef?.current?.getBoundingClientRect()?.y || 100) * 0.01}px) translatex(50px)`}}>
								<source src='./video/turn.mp4' type='video/mp4'/>
							</video>
						</div>
						<div className={clsx(s.bank, s.image)} ref={bankRef}>
							<video className={""} autoPlay loop muted playsInline
								style={{width: '100%', height: '100%',transform: `scale(2) translateY(${(bankRef?.current?.getBoundingClientRect()?.y || 100) * 0.01}px)`}}>
								<source src='./video/bank.mp4' type='video/mp4'/>
							</video>
						</div>
						<div
							className={clsx(s.trend, s.image)} ref={trendRef}>
								<video className={""} autoPlay loop muted playsInline
									style={{width: '100%', height: '100%',transform: `scale(1.3) translateY(${(trendRef?.current?.getBoundingClientRect()?.y || 100) * 0.01}px)`}}>
									<source src='./video/trend.mp4' type='video/mp4'/>
								</video>
							</div>
					</div>
					<div className={s.left}>
						<div className={clsx(s.end, s.image)} ref={endRef}>
							<video className={""} autoPlay loop muted playsInline
								style={{width: '100%', height: '100%',transform: `scale(1.3) translateY(${(endRef?.current?.getBoundingClientRect()?.y || 100) * 0.01}px)`}}>
								<source src='./video/end.mp4' type='video/mp4'/>
							</video>
						</div>
						<div className={clsx(s.m_carmax, s.image)} ref={carmaxRef} >
							<video className={""} autoPlay loop muted playsInline
								style={{width: '100%', height: '100%',transform: `scale(2) translateY(${(carmaxRef?.current?.getBoundingClientRect()?.y || 100) * 0.01}px)`}}>
								<source src='./video/carmax.mp4' type='video/mp4'/>
							</video>
						</div>
						<div className={clsx(s.gen, s.image)} ref={gemRef}>
							<video className={""} autoPlay loop muted playsInline
								style={{width: '100%', height: '100%',transform: `scale(1.3) translateY(${(gemRef?.current?.getBoundingClientRect()?.y || 100) * 0.01}px)`}}>
								<source src='./video/gem.mp4' type='video/mp4'/>
							</video>
						</div>
						<div
							className={clsx(s.video, s.image)}
							style={{ backgroundImage: `url(${videoImg})` }}></div>
					</div>
				</div>
			</div>
			<div className={s.after}></div>
			<div className={s.container_mobile}>
				<h2>Портфолио</h2>
				<div className={s.image_modile}>
					<div className={clsx(s.carmax, s.image)}>
						<video className={""} autoPlay loop muted playsInline
							style={{width: '100%', height: '100%'}}>
							<source src='./video/carmax.mp4' type='video/mp4'/>
						</video>
					</div>
					<h3>Carmax</h3>
				</div>
				<div className={s.image_modile}>
					<div className={clsx(s.carmax, s.image)}>
						<video className={""} autoPlay loop muted playsInline
							style={{width: '100%', height: '100%'}}>
							<source src='./video/end.mp4' type='video/mp4'/>
						</video>
					</div>
					<h3>xpad pro</h3>
				</div>
				<div className={s.image_modile}>
					<div className={clsx(s.carmax, s.image)} >
						<video className={""} autoPlay loop muted playsInline
							style={{width: '100%', height: '100%'}}>
							<source src='./video/turn.mp4' type='video/mp4'/>
						</video>
					</div>
					<h3>kf OLD VERSION</h3>
				</div>
				<div className={s.image_modile}>
					<div className={clsx(s.carmax, s.image)} >
						<video className={""} autoPlay loop muted playsInline
							style={{width: '100%', height: '100%'}}>
							<source src='./video/bank.mp4' type='video/mp4'/>
						</video>
					</div>
					<h3>VAKKO WALLET</h3>
				</div>
				<div className={s.image_modile}>
					<div className={clsx(s.carmax, s.image)} >
						<video className={""} autoPlay loop muted playsInline
							style={{width: '100%', height: '100%'}}>
							<source src='./video/trend.mp4' type='video/mp4'/>
						</video>
					</div>
					<h3>aLPHA DEX</h3>
				</div>
				<div className={s.image_modile}>
					<div className={clsx(s.carmax, s.image)} >
						<video className={""} autoPlay loop muted playsInline
							style={{width: '100%', height: '100%'}}>
							<source src='./video/gem.mp4' type='video/mp4'/>
						</video>
					</div>
					<h3>ARK PRODUCTION</h3>
				</div>
			</div>
		</section>
	);
}
