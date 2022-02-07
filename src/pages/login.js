import { Button, Card, Container, Form, Row} from "react-bootstrap";
import {useForm} from "react-hook-form";
import {Link, useHistory} from "react-router-dom";
import {useAuth} from "../contexts/Auth";
import {LoginAPI} from "../services/api";

function Login () {

    const {register,handleSubmit , formState: {errors}} = useForm()
    const { toggleAuth , user} = useAuth();
    const history = useHistory()
    // login
    const onSubmit = (data) => {
        LoginAPI(data)
            .then(res => {
                toggleAuth(res.data.token)
                history.push('/dashboard')
            })
            .catch(err => {
                console.error(err)
            })
    }

    return (
        <Container className={'col-md-4 col-sm-7 vh-100'}>
            <Row className={'vh-100 mx-1 align-items-center'}>
                <Card>
                    <Card.Title><h1 className={'display-5 text-center mt-3'}>Login</h1></Card.Title>
                    <Card.Body>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group className="mb-3">
                                <Form.Label>Username</Form.Label>
                                <Form.Control placeholder="Enter username" {...register('username', {
                                    required: 'username required'
                                })} />
                                {errors.username && <p className={'text-danger'}> {errors.username.message} </p>}
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" {...register('password',{
                                    required: 'password  required',
                                    minLength: {
                                        value: 5,
                                        message: 'min password length 5'
                                    }
                                })} />
                                {errors.password && <p className={'text-danger'}> {errors.password.message} </p>}
                            </Form.Group>
                            <div className={'d-flex justify-content-center'}>
                                <Form.Group>
                                    <Button variant="primary" type="submit">Login</Button>
                                </Form.Group>
                            </div>
                            <div>
                                <p className={'mt-3 text-center fw-light'}>Need an account? <Link to={'/signup'}>Signup</Link></p>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    )
}

export default Login