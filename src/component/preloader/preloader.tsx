import { useEffect, useLayoutEffect, useState } from "react";
import s from './preloader.module.scss';

export function Preloader(){
	const [progress, setProgress] = useState(0);
  	const [isLoaded, setIsLoaded] = useState(false);

	useLayoutEffect(() => {
		updateProgress();
		// window.addEventListener("load", updateProgress);
		document.addEventListener("readystatechange", updateProgress);
		return () => {
			// window.removeEventListener("load", updateProgress);
			document.removeEventListener("readystatechange", updateProgress);
		};
	}, []);

	useEffect(() => {
		if(!isLoaded)
			document.body.style.overflow = "hidden"
		else
			document.body.style.overflow = ""

	},[isLoaded])

	const intervalId = setInterval(() => {
		setProgress(prev => {
		  if (prev < 90) {
			// Увеличиваем на случайное значение от 1 до 5
			return prev + Math.floor(Math.random() * 5) + 1;
		  }
		  return prev;
		});
	  }, 100);

	const handleLoad = () => {
		clearInterval(intervalId);
		setProgress(100);
		// Через небольшую задержку скрываем прелоадер, чтобы показать 100%
		setTimeout(() => {
			setIsLoaded(true);
		}, 500);
	};

	const updateProgress = () => {
		console.log(document.readyState)
		if (document.readyState === "loading") {
			setProgress(10); // Предварительная загрузка
		} else if (document.readyState === "interactive") {
			setProgress(30); // DOM загружен
		} else if (document.readyState === "complete") {
			setProgress(90);
			setTimeout(() => {setProgress(100);}, 100);
			setTimeout(() => {setIsLoaded(true)}, 500); // Добавляем небольшую задержку
		// setIsLoaded(true)
		}
	};

  if (isLoaded) return null;
  return (
    <div className={s.loader_container}>
		<div className={s.loader_bar}>
			<p>{progress}%</p>
		</div>
    </div>
  );
}