import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import Base from "../components/Base";
import { useEffect, useState } from "react";

const Signup = () => {
    const containerStyle = {
        backgroundColor: '', // Change this to your preferred background color
       
    };

    const [data,setData]=useState({
        name: "",
        email: "",
        password: "",
        about: "",
    })
    
    // useEffect(()=>{
    //     console.log(data)
    // },[data])

    const [error, setError] = useState({
        errors: {},
        isError: false,
    });

    const handleChange=(event,property)=>{
        // Dynamic setting of value
        setData({...data,[property]:event.target.value});

    }


    const resetData=()=>{
        setData({
            name: "",
            email: "",
            password: "",
            about: "",
        })
    };


    const submitForm=(event)=>{
        event.preventDefault();
        console.log(data);
        //Validation

        // calling api
    }

    return (
        <Base>
            <Container style={containerStyle}>
       <Row className="mt-4">
        <Col sm={{size:6,offset:3}}>
         <Card  color="dark" inverse>
                    <CardHeader className="text-center">
                        <h3>Please Sign up!!!</h3>
                    </CardHeader>
                    <CardBody>
                        <Form onSubmit={submitForm}>
                            <FormGroup>
                              <Label for="name"> Name</Label>
                                <Input name="name" 
                                type="text" 
                                placeholder="Enter your name"
                                onChange={(e)=>handleChange(e,"name")}
                                value={data.name}
                                />

                            </FormGroup>

                            <FormGroup>

                                <Label for="email">Email</Label>
                                <Input name="email" type="email" placeholder="Enter Email" 
                                            onChange={(e) => handleChange(e, "email")}
                                            value={data.email}/>

                            </FormGroup>

                            <FormGroup>

                                <Label for="password">Password</Label>
                                <Input name="password" type="password" placeholder="Enter password" 
                                    onChange={(e) => handleChange(e, "password")}
                                    value={data.password}/>
                            </FormGroup>

                            <FormGroup>

                                <Label for="About">About</Label>
                                <Input name="About" type="textarea" placeholder="Tell about yourself" 
                                            onChange={(e) => handleChange(e, "about")}
                                            value={data.about}/>

                            </FormGroup>

                                                    <Container className="text-center">
                            <Button
                                color="danger"
                                tag="input"
                                type="submit"
                                value="Register"
                            />
                            <Button
                                color="secondary"
                                tag="input"
                                type="submit"
                                value="reset"
                                onClick={resetData}
                                className="ms-2"
                            />
                        </Container>
                     </Form>

                    </CardBody>
                </Card>

        </Col>
       </Row>
            </Container> ̰
        </Base>
    )
};

export default Signup;