import { useEffect, useState } from "react";
import s from './preloader.module.scss';
import { ReactComponent as Number } from './assets/number.svg';

export function Preloader(){
	const [progress, setProgress] = useState(0);
	const [progressStatus, setProgressStatus] = useState(0);
  	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		// updateProgress();
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
		setProgressStatus(prev => {
		  if (prev < 100 && progress < 100) {
			// Увеличиваем на случайное значение от 1 до 5
			let number = prev + Math.floor(Math.random() * 5);
			return number < 100 ? number : 100
		  }
		  return prev;
		});
	  }, 200);


	const updateProgress = () => {
		if (document.readyState === "loading") {
			setProgress(10); // Предварительная загрузка
		} else if (document.readyState === "interactive") {
			setProgress(30); // DOM загружен
		} else if (document.readyState === "complete") {
			setProgress(90);
			setTimeout(() => {setProgress(100);}, 100);
			 // Добавляем небольшую задержку
		// setIsLoaded(true)
		}
	};

	useEffect(() => {
		if(progress === 100 && progressStatus === 100)
			setTimeout(() => {setIsLoaded(true)}, 500);
	},[progress,  progressStatus])

	useEffect(() => {

	},)

  if (isLoaded) return null;
  return (
    <div className={s.loader_container}>
		<div className={s.loader_bar}>
			{/* {progress >= 30 ? <p>{progress}%</p> : <Number/>} */}
			<p>{progressStatus}%</p>
		</div>
    </div>
  );
}