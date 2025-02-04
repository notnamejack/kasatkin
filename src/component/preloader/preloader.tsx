import { useEffect, useLayoutEffect, useState } from "react";


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
			setProgress(30); // Предварительная загрузка
		} else if (document.readyState === "interactive") {
			setProgress(70); // DOM загружен
		} else if (document.readyState === "complete") {
			setProgress(90);
		setTimeout(() => {setIsLoaded(true),setProgress(100);}, 500); // Добавляем небольшую задержку
		// setIsLoaded(true)
		}
	};

  if (isLoaded) return null;
  return (
    <div style={styles.loaderContainer}>
      <div style={{ ...styles.loaderBar, width: `${progress}%` }} />
      <p style={styles.loaderText}>{progress}%</p>
    </div>
  );
}

const styles = {
	loaderContainer: {
	  position: "fixed" as const,
	  top: 0,
	  left: 0,
	  width: "100%",
	  height: "4px",
	  backgroundColor: "#f3f3f3",
	  zIndex: 9999,
	},
	loaderBar: {
	  height: "100%",
	  backgroundColor: "#007bff",
	  transition: "width 0.3s ease-in-out",
	},
	loaderText: {
	  position: "fixed" as const,
	  top: "50%",
	  left: "50%",
	  transform: "translate(-50%, -50%)",
	  fontSize: "16px",
	  fontWeight: "bold",
	},
  };