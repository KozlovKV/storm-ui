import { Card, Button, Row, Col, ListGroup, Alert } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import { useState, useEffect } from 'react';

export default function MagicPage() {
    const [list, setList] = useState([]);

    useEffect(() => setList(JSON.parse(localStorage.getItem('cards'))), []);

    return <>
        <h1 className="mt-3">Page for cards codes parsing</h1>
        <Card className="mt-3">
            <Card.Header>2 decks with 1 different card</Card.Header>
            <Card.Body>
                <Formik
                    initialValues={{
                        firstExportCode: '',
                        firstUniqueCardName: '',
                        secondExportCode: '',
                        secondUniqueCardName: '',
                    }}
                    onSubmit={data => {
                        const firstStr = atob(data.firstExportCode),
                            secondStr = atob(data.secondExportCode),
                            firstCard = { name: data.firstUniqueCardName },
                            secondCard = { name: data.secondUniqueCardName };
                        let cards = [];
                        let cardCommonStr = firstStr.slice(1) + secondStr.slice(1);
                        for (let i = 0; i < cardCommonStr.length; i += 4) {
                            cards.push(cardCommonStr.slice(i, i + 4));
                        }
                        cards.forEach(code => {
                            if (cards.indexOf(code) === cards.lastIndexOf(code)) {
                                if (firstStr.includes(code)) firstCard.code = code;
                                else secondCard.code = code;
                            }
                        });
                        let list = JSON.parse(localStorage.getItem('cards') ?? '[]');
                        list.push(firstCard, secondCard);
                        localStorage.setItem('cards', JSON.stringify(list));
                        setList(list);
                    }}
                >
                    <Form>
                        <Row className="g-2 mb-2">
                            <Col className="col-12 col-lg-8">
                                <Field className="form-control w-100" name="firstExportCode" placeholder="First export code" />
                            </Col>
                            <Col className="col-12 col-lg-4">
                                <Field className="form-control w-100" name="firstUniqueCardName" placeholder="First unique card" />
                            </Col>
                            <Col className="col-12 col-lg-8">
                                <Field className="form-control w-100" name="secondExportCode" placeholder="Second export code" />
                            </Col>
                            <Col className="col-12 col-lg-4">
                                <Field className="form-control w-100" name="secondUniqueCardName" placeholder="Second unique card" />
                            </Col>
                        </Row>
                        <Button type="submit">Get card codes</Button>
                    </Form>
                </Formik>
            </Card.Body>
        </Card>
        <Card className="mt-3">
            <Card.Header>1 deck with ordered cards</Card.Header>
            <Card.Body>
                <Formik
                    className="mt-2"
                    initialValues={{
                        deckCode: '',
                        cardsStr: '',
                    }}
                    onSubmit={({ deckCode, cardsStr }) => {
                        const strCode = atob(deckCode).slice(1),
                            cardsNames = cardsStr.split('|');
                        let cards = [];
                        for (let i = 0; i * 4 < strCode.length; i++) {
                            cards.push({
                                name: cardsNames[i],
                                code: strCode.slice(i * 4, (i + 1) * 4)
                            });
                        }
                        let list = JSON.parse(localStorage.getItem('cards') ?? '[]');
                        list.push(...cards);
                        localStorage.setItem('cards', JSON.stringify(list));
                        setList(list);
                    }}
                >
                    <Form>
                        <Row className="g-2 mb-2">
                            <Col className="col-12">
                                <Field className="form-control w-100" name="deckCode" placeholder="Deck export code" />
                            </Col>
                            <Col className="col-12">
                                <Field className="form-control w-100" name="cardsStr" placeholder="Cards names" />
                            </Col>
                        </Row>
                        <Button type="submit">Get card codes</Button>
                    </Form>
                </Formik>
            </Card.Body>
        </Card>
        <Card className="mt-3">
            <Card.Header>Saved cards</Card.Header>
            <Card.Body>
                <ListGroup>
                    <h3>Human list ({list?.length} items)</h3>
                    {
                        list?.map(card =>
                            <ListGroup.Item key={card.code}>{card.name} - {card.code}</ListGroup.Item>)
                    }
                </ListGroup>
                <Alert className="mt-2">
                    <Alert.Heading>Raw list ({list?.length} items)</Alert.Heading>
                    <span className="font-monospace">
                        {JSON.stringify(list)}
                    </span>
                </Alert>
            </Card.Body>
        </Card>
    </>
}