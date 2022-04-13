import React from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import MyNav from "../components/MyNav";
import banner from '../assets/Bookmark.png'
import {Github} from "react-bootstrap-icons";

export default function Home () {
    return (
        <div className={'vh-100 d-flex flex-column'}>
            <MyNav />
            <div className={'d-flex container gap-5 flex-wrap flex-grow-1 justify-content-center align-items-center'}>
                <div className={'col-10 col-md-8'}>
                    <h1 className={'fw-bolder display-1'}>Bookmark</h1>
                    <p className={'fw-light fs-3'}>Saving bookmarks allows you to easily access your favorite locations on the Web. It is helpful to bookmark frequently visited websites and useful references since you don't have to remember the URLs. Additionally, you can just click the bookmarks instead of typing in the full web addresses.</p>
                </div>
                <div className={'col-md-3 col-10'}>
                    <Image fluid src={banner} alt={'banner'} />
                </div>
            </div>
            <div>
                <p className={'fw-light text-center'}>©️CopyRight 2022 - <a id={'git'} href={'https://github.com/SajjadKiani/Bookmarker'}>github <Github/></a></p>
            </div>
        </div>
    )
}