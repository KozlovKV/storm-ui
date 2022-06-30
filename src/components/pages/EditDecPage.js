import { useParams } from 'react-router-dom';

export default function EditDecPage() {
	const id = useParams()?.id;

	return <h1>Редактирование дэки {id}</h1>;
}