import { useCallback, useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default function PagintaionList({ list, itemsPerPage }) {
	const [page, setPage] = useState(0);
	const [pagintatedList, setPaginatedList] = useState([]);

	const isMin = useCallback(() => page === 0, [page]);
	const isMax = useCallback(() => (page + 1) * itemsPerPage >= list.length, [page, itemsPerPage, list]);

	const deltaPage = useCallback(
		(delta) => setPage(page => page + delta),
		[setPage]
	);

	const getPageItems = (items) => items.map(item => <Col>{item}</Col>);

	useEffect(() => setPaginatedList(
		list.slice(page * itemsPerPage, page * itemsPerPage + itemsPerPage)
	), [list, page, itemsPerPage])

	return <>
		<Row className="row-cols-3 row-cols-lg-6">
			{getPageItems(pagintatedList)}
		</Row>
		<div className="d-flex justify-content-around">
			<Button onClick={() => deltaPage(-1)} disabled={isMin()}>Prev</Button>
			<span>{page + 1}</span>
			<Button onClick={() => deltaPage(1)} disabled={isMax()}>Next</Button>
		</div>
	</>
}