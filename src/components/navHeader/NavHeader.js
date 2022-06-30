import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function NavHeader() {
	return <header>
		<Navbar bg='dark' variant='dark' expand='lg' className='p-2'>
			<Navbar.Toggle aria-controls='#navbar'>Collapse</Navbar.Toggle>
			<Navbar.Collapse id='navbar'>
				<Nav variant='pills' as='nav'>
					<Nav.Link className='text-center' as={NavLink} end to='/'>
						Главная
					</Nav.Link>
					<Nav.Link className='text-center' as={NavLink} end to='/cards'>
						Карточки
					</Nav.Link>
					<Nav.Link className='text-center' as={NavLink} end to='/decs'>
						Дэки
					</Nav.Link>
					<Nav.Link className='text-center' as={NavLink} end to='/decs/1'>
						Дэка 1
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>

	</header>
}