import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import s from './animated-border-box.module.scss';

gsap.registerPlugin(MotionPathPlugin);

interface IAnimatedBorderBox{
	color?: string;
	width?: number;
	height?: number;
}

export function AnimatedBorderBox({
	width = 590,
	height = 390,
	color = "#000"}:IAnimatedBorderBox) {
		const pathRef = useRef<SVGPathElement>(null);
		const markerRef = useRef<SVGCircleElement>(null);

		// Параметры контура
		const strokeWidth = 8;
		const offset = strokeWidth / 2; // 4px
		const borderRadius = 25;

		// Рассчитываем динамически путь с отступами, чтобы толщина линии не обрезалась:
		// Начало: (offset + borderRadius, offset)
		// Верхняя линия: до (width - borderRadius - offset, offset)
		// Арка: до (width - offset, offset + borderRadius)
		// И т.д.
		const pathD = `
		  M ${offset + borderRadius},${offset}
		  H ${width - borderRadius - offset}
		  A ${borderRadius} ${borderRadius} 0 0 1 ${width - offset},${offset + borderRadius}
		  V ${height - borderRadius - offset}
		  A ${borderRadius} ${borderRadius} 0 0 1 ${width - borderRadius - offset},${height - offset}
		  H ${offset + borderRadius}
		  A ${borderRadius} ${borderRadius} 0 0 1 ${offset},${height - borderRadius - offset}
		  V ${offset + borderRadius}
		  A ${borderRadius} ${borderRadius} 0 0 1 ${offset + borderRadius},${offset}
		  Z
		`;

		useEffect(() => {
		  const path = pathRef.current;
		  const marker = markerRef.current;
		  if (!path || !marker) return;

		  // Вычисляем периметр контура
		  const length = path.getTotalLength();

		  // dashSize рассчитываем как половину ширины (чтобы оставалась фиксированная длина линии)
		  const dashSize = width / 2;
		  const gap = length - dashSize;

		  // Случайное начальное смещение для анимации
		  const initialOffset = Math.random() * length;

		  gsap.set(path, {
			strokeDasharray: `${dashSize} ${gap}`,
			strokeDashoffset: initialOffset,
			strokeLinecap: 'round'
		  });

		  // Анимация движения в обратном направлении, длительностью 8 сек, с использованием ModifiersPlugin для плавного зацикливания
		  gsap.to(path, {
			strokeDashoffset: initialOffset - length,
			duration: 8,
			repeat: -1,
			ease: 'none',
			modifiers: {
			  strokeDashoffset: (value) => {
				const offsetVal = parseFloat(value);
				return (((offsetVal % length) + length) % length).toString();
			  }
			}
		  });

		  // Анимация маркера, фиксирующего начало линии
		  gsap.set(marker, { r: 4, fill: 'none' });
		  gsap.to(marker, {
			duration: 8,
			repeat: -1,
			ease: 'none',
			motionPath: {
			  path: path,
			  align: path,
			  start: (initialOffset / length) % 1,
			  end: (((initialOffset - length) / length) + 1) % 1,
			  autoRotate: false
			}
		  });
		}, [width, height]);

		return (
		  <div
			className={s.container}
			style={{ width: `${width}px`, height: `${height}px` }}
		  >
			<svg
			  width="100%"
			  height="100%"
			  viewBox={`0 0 ${width} ${height}`}
			  className={s.svg}
			>
			  <path
				ref={pathRef}
				d={pathD}
				fill="none"
				stroke={color}
				strokeWidth={strokeWidth}
			  />
			  <circle ref={markerRef} cx="0" cy="0" />
			</svg>
		  </div>
		);
};
