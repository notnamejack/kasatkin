import { useRef } from "react";
import { ReactComponent as Logo} from "./assets/project-logo.svg"
import s from './project.module.scss';
import carmaxImg from './assets/carmax.jpg'
import turnImg from './assets/turn.jpg'
import bankImg from './assets/bank.jpg'
import trendImg from './assets/trend.jpg'
import endImg from './assets/end.jpg'
import mCarmaxImg from './assets/m-carmax.jpg'
import genImg from './assets/gen.jpg'
import videoImg from './assets/video.jpg'
import clsx from "clsx";

export function Project(){

	const refProject = useRef<HTMLDivElement>(null)

	return(
		<section className={s.project}>
			<div className={s.deactop_logo}>
			 	<Logo/>
			</div>
			<div className={s.container_list}>
				<div className={s.list_project} ref={refProject}>
					<div className={s.rigth}>
						<div className={clsx(s.carmax, s.image)} style={{backgroundImage: `url(${carmaxImg})`}}></div>
						<div  className={clsx(s.turn, s.image)} style={{backgroundImage: `url(${turnImg})`}}></div>
						<div  className={clsx(s.bank, s.image)} style={{backgroundImage: `url(${bankImg})`}}></div>
						<div  className={clsx(s.trend, s.image)} style={{backgroundImage: `url(${trendImg})`}}></div>
					</div>
					<div className={s.left}>
						<div className={clsx(s.end, s.image)} style={{backgroundImage: `url(${endImg})`}}></div>
						<div  className={clsx(s.m_carmax, s.image)} style={{backgroundImage: `url(${mCarmaxImg})`}}></div>
						<div  className={clsx(s.gen, s.image)} style={{backgroundImage: `url(${genImg})`}}></div>
						<div  className={clsx(s.video, s.image)} style={{backgroundImage: `url(${videoImg})`}}></div>
					</div>
				</div>
			</div>
		</section>
	)
}