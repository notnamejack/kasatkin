import s from './header.module.scss';
import { ReactComponent as Logo } from './assets/logo.svg';

export function Header() {
	return (
		<header>
			<nav>
				<a href='https://kasatkin.io/ru' target='_blank' title='Главная' className={s.logo}>
					<Logo />
				</a>
			</nav>
		</header>
	);
}
