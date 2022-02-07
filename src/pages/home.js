import React from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import MyNav from "../components/MyNav";
import banner from '../assets/Bookmark.png'
import {Github} from "react-bootstrap-icons";

export default function Home () {
    return (
        <div>
        <MyNav />
        <Container>
            <Row className={'vh-100 align-items-center justify-content-between justify-content-ms-center'}>
                <Col className={'col-md-8 col-12'}>
                    <h1 className={'fw-bolder display-1'}>Bookmark</h1>
                    <p className={'fw-light fs-3'}>Saving bookmarks allows you to easily access your favorite locations on the Web. It is helpful to bookmark frequently visited websites and useful references since you don't have to remember the URLs. Additionally, you can just click the bookmarks instead of typing in the full web addresses.</p>
                </Col>
                <Col className={'col-md-3 col-9 '}>
                    <Image fluid src={banner} alt={'banner'} />
                </Col>
            </Row>
            <Row>
                <p className={'fw-light text-center'}>©️CopyRight 2022 - <a id={'git'} href={'https://github.com/SajjadKiani/Bookmarker'}>github <Github/></a></p>
            </Row>
        </Container>
        </div>
    )
}