import {Offcanvas} from "react-bootstrap";
import {MyModal} from "./MyModal";
import React from "react";
import ContentList from "./ContentList";

export default function MyCanvas ({canvasShow , setCanvasShow , category , handleFilter}) {
    return (
        <Offcanvas show={canvasShow} onHide={() => setCanvasShow(false)} >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <ContentList category={category} handleFilter={handleFilter} />
            </Offcanvas.Body>
        </Offcanvas>
    )
}