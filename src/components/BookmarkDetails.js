import {Button, Card, Col, Container, Form, Modal, Row} from "react-bootstrap";
import React from "react";

export default function BookmarkDetails ({data , bookmarkDetailsShow , setBookmarkDetailsShow }) {

    return (
        <Modal
            show={bookmarkDetailsShow}
            onHide={() => setBookmarkDetailsShow(false)}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Bookmark Details
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Card>
                        <Card.Img variant="top" alt={'image'} src={data.image} />
                        <Card.Body>
                            <Card.Title><a href={data.url}>{data.title}</a></Card.Title>
                            <Card.Text>
                                {data.description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant={'outline-danger'} onClick={''}>Delete</Button>
                    <Button variant={'primary'} onClick={() => setBookmarkDetailsShow(false)}>Close</Button>
                </Modal.Footer>
        </Modal>
    )
}