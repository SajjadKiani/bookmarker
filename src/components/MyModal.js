import React from "react";
import {Col, Container, Row, Form, Modal, Button, InputGroup, FormControl} from "react-bootstrap";
import {set, useForm} from "react-hook-form";
import {useAuth} from "../contexts/Auth";
import {Plus} from "react-bootstrap-icons";
import {NewCategoryAPI} from "../services/api";

export function MyModal ( props ) {

    const {register , handleSubmit ,formState: { errors }} = useForm()
    const { toggleAuth , user} = useAuth();
    const [newCategory , setNewCategory] = React.useState('')

    const onSubmit = (data) => {
        props.handleNewBookmark({...data,description: "description"})
        props.onHide()
    }

    const handleNewCategory = () => {
        if (newCategory.length !== 0)
            NewCategoryAPI(user,newCategory)
                .then(res => {
                    // console.log(res.data)
                    props.setCategory(prev => [...prev,newCategory])
                })
                .catch(err =>{console.log(err)})
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        New Bookmark
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container className={'mt-3 justify-content-center'} >
                            <Row>
                                <Col>
                                <p className={'text-danger'}>{errors.url && "* " + errors.url.message}</p>
                                <Form.Control className={'mb-3'} type={'text'} placeholder={'Enter URL...'}
                                   {...register("url",{required: "please enter url."})} />
                                </Col>
                            </Row>
                            <Row className={'mb-3 col-md-5'}>
                                <InputGroup>
                                    <Form.Control
                                        placeholder="new category..."
                                        value={newCategory}
                                        onChange={(e) => setNewCategory(e.target.value)}
                                    />
                                    <Button variant="outline-success" onClick={handleNewCategory}><Plus /></Button>
                                </InputGroup>
                            </Row>
                            <Row>
                                <Col className={'col-md-5'}>
                                    <Form.Select className={'mb-3 '} aria-label="Default select example" {...register("category")}>
                                        {props.category.map((d,i)=> {
                                            return <option key={i} value={d}>{d}</option>
                                        })}
                                    </Form.Select>
                                </Col>
                            </Row>

                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant={'outline-secondary'} onClick={props.onHide}>Close</Button>
                    <Button type={'submit'}>Bookmark</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}