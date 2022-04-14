import MyNav from "../components/MyNav";
import {Card, Col, Container, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import {UserAPI} from "../services/api";
import {useAuth} from "../contexts/Auth";
import {PersonCircle} from "react-bootstrap-icons";

export default function UserDetails () {

    const [userDetails , setUserDetails] = useState([])
    const {user} = useAuth()

    useEffect(() => {
        UserAPI(user)
            .then(res => {
                setUserDetails(JSON.parse(res.data)[0].fields)
            })
            .catch(err => {console.log(err)})
    },[])


    return (
        <div className="d-flex flex-column vh-100">
            <MyNav />

            <div className={'d-flex container col-md-4 flex-grow-1 col-sm-7 align-items-center justify-content-center'}>
                <Row className={' mx-1 '}>
                    <Card>
                        <Card.Title><h1 className={'display-5 text-center mt-3'}>{userDetails.username}</h1></Card.Title>
                        <Card.Body>
                            <Row>
                                <Col className={'col-5'}>
                                    <PersonCircle size={80} color={'gray'} />
                                </Col>
                                <Col className={'col-7'}>
                                    <p className={'fw-bold'}>first name:</p>
                                    <p className={'fw-light'}>{userDetails.first_name}</p>

                                    <p className={'fw-bold'}>last name:</p>
                                    <p className={'fw-light'}>{userDetails.last_name}</p>

                                    <p className={'fw-bold'}>email:</p>
                                    <p className={'fw-light'}>{userDetails.email}</p>

                                    <p className={'fw-bold'}>date joined:</p>
                                    <p className={'fw-light'}>{userDetails.date_joined}</p>

                                    <p className={'fw-bold'}>last login:</p>
                                    <p className={'fw-light'}>{userDetails.last_login}</p>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Row>
            </div>
        </div>
    )
}