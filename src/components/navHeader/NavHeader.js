import { NavLink } from 'react-router-dom';

export default function NavHeader() {
	return <header>
		<ul>
			<li>
				<NavLink to="/">Главная</NavLink>
			</li>
			<li>
				<NavLink to="/cards">Карточки</NavLink>
			</li>
			<li>
				<NavLink to="/decs">Дэки</NavLink>
			</li>
			<li>
				<NavLink to="/decs/1">Дэка 1</NavLink>
			</li>
		</ul>
	</header>
}