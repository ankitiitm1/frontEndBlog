import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import Base from "../components/Base";

const Login = () => {
    const containerStyle = {
        backgroundColor: '', // Change this to your preferred background color

    };
    return (
        <Base>
            <Container style={containerStyle}>
                <Row className="mt-4">
                    <Col sm={{ size: 6, offset: 3 }}>
                        <Card color="dark" inverse>
                            <CardHeader className="text-center">
                                <h3>Please Login in!!!</h3>
                            </CardHeader>
                            <CardBody>
                                <Form>
                                  

                                    <FormGroup>

                                        <Label for="email">Email</Label>
                                        <Input name="email" type="email" placeholder="Enter Email" />

                                    </FormGroup>

                                    <FormGroup>

                                        <Label for="password">Password</Label>
                                        <Input name="password" type="password" placeholder="Enter password" />

                                    </FormGroup>



                                </Form>
                                <Container className="text-center">
                                    <Button
                                        color="danger"
                                        tag="input"
                                        type="submit"
                                        value="Login"
                                    />
                                    <Button
                                        color="secondary"
                                        tag="input"
                                        type="submit"
                                        value="reset"
                                        className="ms-2"
                                    />
                                </Container>
                            </CardBody>
                        </Card>

                    </Col>
                </Row>
            </Container> ̰
        </Base>
    )
};

export default Login;