import {Container, Nav, Navbar, Button, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useAuth} from "../contexts/Auth";
import {Bookmark, PersonCircle} from "react-bootstrap-icons";
import {useEffect, useState} from "react";
import {UserAPI} from "../services/api";

function MyNav () {

    const { toggleAuth , user} = useAuth();
    const [userDetails , setUserDetails] = useState([])

    useEffect(() => {
        UserAPI(user)
            .then(res => setUserDetails(JSON.parse(res.data)[0].fields ))
            .catch(err => {console.log(err)})
    },[])

    return (
        <div className={'MyNav'}>
            <Navbar collapseOnSelect expand="sm" bg="" variant="light">
                <Container className={'mt-3'}>
                    <Navbar.Brand>
                        <Bookmark /> Bookmark
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className={'ms-auto'} defaultActiveKey="/">
                            <Link to={'/'} className={'nav-link'}>Home</Link>
                            <Link to={'/dashboard'} className={'nav-link'}>Dashboard</Link>
                            {user === '' ? <Link to={'/login'}><Button variant={'outline-primary rounded-pill'}>Login</Button></Link> :
                                // <Link to={''} className={'nav-link'}><PersonCircle size={30} /></Link>
                                <NavDropdown title={<PersonCircle size={30} />} id="basic-nav-dropdown">
                                    <Link to={'/user'} className={'dropdown-item'}>{userDetails.username}</Link>
                                    <Link to={'/logout'} className={'dropdown-item'}>Logout</Link>
                                </NavDropdown>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export  default MyNav;
