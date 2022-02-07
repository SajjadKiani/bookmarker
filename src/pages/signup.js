import {Alert, Button, Card, Container, Form, Row} from "react-bootstrap";
import {useForm} from "react-hook-form";
import {Link, useHistory} from "react-router-dom";
import {SignupAPI} from "../services/api";

export  default  function Signup () {

    const {register,handleSubmit , formState: {errors}} = useForm();
    const history = useHistory()

    const onSubmit = (data) => {
        SignupAPI(data)
            .then(res => {
                history.push('/login')
            })
            .catch(err => {
                console.error(err)
            })

    }

    return (
        <Container className={'col-md-4 col-sm-7 vh-100'}>
            <Row className={'vh-100 mx-1 align-items-center'}>
                <Card>
                    <Card.Title><h1 className={'display-5 text-center mt-3'}>Signup</h1></Card.Title>
                    <Card.Body>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group className="mb-3">
                                <Form.Label>User Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter user name" {...register('username', {
                                    required: 'enter user name',
                                    minLength: {
                                        value: 5,
                                        message: 'min length user name 5'
                                    }
                                })} />
                                {errors.username && <p className={'text-danger'}> {errors.username.message} </p>}
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" {...register('email', {
                                    required: 'enter email'
                                })} />
                                {errors.email && <p className={'text-danger'}> {errors.email.message} </p>}
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" {...register('password',{
                                    required: 'enter password',
                                    minLength: {
                                        value: 5,
                                        message: 'min password length 5'
                                    }
                                })} />
                                {errors.password && <p className={'text-danger'}> {errors.password.message} </p>}
                            </Form.Group>
                            <div className={'d-flex justify-content-center'}>
                                <Form.Group>
                                    <Button variant="primary" type="submit">Signup</Button>
                                </Form.Group>
                            </div>
                            <div>
                                <p className={'mt-3 text-center fw-light'}>Already have an account? <Link to={'/login'}>Login</Link></p>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    )
}