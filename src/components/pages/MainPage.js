import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

export default function MainPage() {
	return <>
		<h1 className="text-center">Stormbound Dec Builder</h1>
		<Card border="primary" className="mt-3">
			<Card.Header><h2>What is it?</h2></Card.Header>
			<Card.Body>
				<Card.Text>
					Stormbound Dec Builder is a powerful web utility for managing dec in the game Stormbound Kingdom Wars
				</Card.Text>
			</Card.Body>
			<Card.Footer className="d-flex justify-content-around">
				<Link to="/cards"><Button variant="warning">Карты</Button></Link>
				<Link to="/decs"><Button variant="success">Дэки</Button></Link>
			</Card.Footer>
		</Card>
		<Row className="mt-3 g-2">
			<Col className="col-12 col-lg-4">
				<Card border="success">
					<Card.Header><h2>Login</h2></Card.Header>
					<Card.Body>
						<Form>
							<Row className="row-cols-1 row-cols-lg-2 g-2">
								<Col>
									<Form.Control type="email" placeholder="Email" />
								</Col>
								<Col>
									<Form.Control type="password" placeholder="Password" />
								</Col>
							</Row>
							<div className="d-flex justify-content-around">
								<Button type="sumbit" variant="success" className="mt-2">Login</Button>
							</div>
						</Form>
					</Card.Body>
				</Card>
			</Col>
			<Col className="col-12 col-lg-8">
				<Card border="warning">
					<Card.Header><h2>Registration</h2></Card.Header>
					<Card.Body>
						form...
					</Card.Body>
				</Card>
			</Col>
		</Row>
	</>;
}