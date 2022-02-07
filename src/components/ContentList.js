import React, {useEffect, useState} from "react";
import {Accordion , Form} from "react-bootstrap";

export default function ContentList ({category,handleFilter}) {

    const [filters , setFilters] = useState({})

    useEffect(() => {
        handleFilter(filters)
    },[filters])

    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>filter | Categories</Accordion.Header>
                <Accordion.Body>
                    {category.map((d,i) => {
                        return <Form.Check
                            type={'checkbox'}
                            id={i}
                            label={d}
                            key={i}
                            onChange={() => setFilters(prev => ({...prev,[d]: !filters[d] }))}
                            />
                    })}
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>

                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}