import { Button, Row, Col, ListGroup } from "react-bootstrap";
import { Formik, Form, Field } from "formik";

export default function MagicPage() {
    return <>
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
        <ListGroup className="mt-3">
            {
                JSON.parse(localStorage.getItem('cards'))
                    .map(card => <ListGroup.Item>{card.name} - {card.code}</ListGroup.Item>)
            }
        </ListGroup>
    </>
}