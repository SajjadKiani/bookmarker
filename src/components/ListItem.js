import {Image, Card, Col, Row} from "react-bootstrap";
import {Info, InfoCircle} from "react-bootstrap-icons";
import {Link} from "react-router-dom";
import {useState} from "react";
import BookmarkDetails from "./BookmarkDetails";

export default function ListItem ({data}) {

    const [bookmarkDetailsShow , setBookmarkDetailsShow] = useState(false)

    return (
        <>
        <Card className={'col-md-5 m-2 mt-0'}>
            <Card.Body>
                <Card.Text>
                    <a href={data.url}><h5>{data.title}</h5></a>
                    <Row className={'align-items-center'}>
                        <Col className={'col-3 '}>
                            <Image fluid src={data.favicon} alt={'favicon'}  />
                        </Col>
                        <Col>
                            {data.description.slice(0,100)}
                            {data.description.length > 100 ? <p className={'text-muted'}>...</p> : ''}
                        </Col>
                    </Row>

                </Card.Text>

            </Card.Body>
            <Card.Subtitle>
                <Row className={'justify-content-between'}>
                    <Col><p className={'fw-light mx-3'}> {data.category}</p></Col>
                    <Col className={'col-2'}><Link onClick={() => setBookmarkDetailsShow(true)}><InfoCircle /></Link></Col>
                </Row>
            </Card.Subtitle>
        </Card>
        <BookmarkDetails bookmarkDetailsShow={bookmarkDetailsShow} setBookmarkDetailsShow={setBookmarkDetailsShow} data={data} />
        </>
    )
}