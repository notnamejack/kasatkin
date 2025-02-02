import s from './header.module.scss';
import { ReactComponent as Logo } from './assets/logo.svg';

export function Header() {
	return (
		<header>
			<nav>
				<a href='/' title='главная' className={s.logo}>
					<Logo />
				</a>
			</nav>
		</header>
	);
}
