import Container from 'react-bootstrap/Container';
import PagintaionList from '../paginationList/PaginationList';

export default function CardsPage() {
	let foos = [];
	for (let i = 0; i < 50; ++i) {foos.push(i)}
	return <>
		<h1 className='text-center'>Stormbound's cards</h1>
		<Container>
			<h2>Filters</h2>
		</Container>
		<Container>
			<h2>Cards</h2>
			<PagintaionList list={foos} itemsPerPage={12} />
		</Container>
	</>;
}