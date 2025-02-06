import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import s from './create.module.scss';
import { useEffect, useRef, useState } from 'react';

export function Create() {
	const [scrollY, setScrollY] = useState(0);
  const [thirdVisible, setThirdVisible] = useState(false);
  const thirdBlockRef = useRef<HTMLDivElement>(null);
  // Обновление scrollY при прокрутке
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Отслеживание появления третьего блока в зоне видимости
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setThirdVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
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
  // Стили для первого блока: смещение вверх и исчезание
  const blockOneStyle: React.CSSProperties = {
    transform: `translateY(-${scrollY * 0.7}px)`,
    opacity: Math.max(1 - scrollY / 200, 0),
    height: '500px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '2rem',
    position: 'relative',
    zIndex: 1,
  };
  // Определяем высоту второго блока:
  let blockTwoHeight: number;
  if (thirdVisible) {
    blockTwoHeight = 500;
  } else {
    // Увеличение высоты пропорционально прокрутке
    blockTwoHeight = 500 + scrollY * 0.5;
  }
  // Стили для второго блока: увеличение высоты и смещение вверх для эффекта "наезда"
  const blockTwoStyle: React.CSSProperties = {
    height: `${blockTwoHeight}px`,
    backgroundColor: 'transparent',
    transition: 'height 0.3s ease-out, transform .3s ease-out',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '2rem',
    position: 'absolute',
	top: `-60px`,
    zIndex: 0,
    // Смещение вверх, чтобы второй блок "наезжал" на первый
    transform: `translateY(${!thirdVisible ?`-${scrollY * 0.7}` : -60}px)`,
  };
  // Стили для третьего блока
  const blockThreeStyle: React.CSSProperties = {
    height: '500px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '2rem',
  };

	return (
		<section className={s.create}>
			<div style={blockOneStyle}>
				<div className={s.container_title}>
					<h1>
						Делаем лендинги, <strong>которые работают на результат</strong>
					</h1>
				</div>
			</div>
			<div style={{position: 'relative', height: 500, width: `100%`}}>
				<div style={blockTwoStyle}>
					<div className={s.container_video}>
						<video className={s.video} autoPlay loop muted playsInline style={{width: '100%', height: '100%'}}>
							<source src='./video/gem.mp4' type='video/mp4'/>
						</video>
					</div>
				</div>
			</div>
			<div style={blockThreeStyle} ref={thirdBlockRef}>
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
			</div>
		</section>
	);
}
