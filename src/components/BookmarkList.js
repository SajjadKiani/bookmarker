import { Form, Col, Container, Row, Spinner, Button} from "react-bootstrap";
import ListItem from "./ListItem";
import React, {useEffect, useRef, useState} from "react";
import ContentList from "./ContentList";

export default function BookmarkList ({data , loading , setModalShow , setCanvasShow}) {

    const searchInput = useRef()
    const [list , setList] = useState(data)

    useEffect(() => {
        setList(data)
    },[data])

    useEffect(() => {
        searchInput.current.focus()
    },[searchInput])

    const handleSearch = () => {
        if (searchInput.current.value.length !== 0) {
            setList(data.filter((d) => (d.title.toLowerCase().includes(searchInput.current.value)) ) )
        } else {
            setList(data)
        }
    }

    return (
        <div className={'d-flex flex-column'}>
            <div className={'d-flex justify-content-center mb-3'}>
                <div className={'col-md-8'} ><Form.Control ref={searchInput} onChange={handleSearch} className={''} placeholder={'search'} /></div>
                <div className={'mx-2'}><Button className={''} onClick={() => setModalShow(true)} variant={'outline-primary'}>New</Button></div>
                <div className={'d-md-none d-block'}><Button  className={''} onClick={() => setCanvasShow(true)} variant={'outline-success'}>filter</Button></div>
            </div>
            <div className={'d-flex flex-wrap justify-content-center'}>
                {list.map((d,i) => {
                    return <ListItem key={i} data={d} />
                })}
                {list.length === 0 && <p className={'mt-5 text-center text-muted'}>empty!</p>}
                {loading && <Spinner animation="border" />}
            </div>
        </div>
    )
}