import React, {useEffect} from "react";
import MyNav from "./components/MyNav";
import {useState} from "react";
import {MyModal} from "./components/MyModal";
import BookmarkList from "./components/BookmarkList";
import {useAuth} from "./contexts/Auth";
import {Col, Container, Row} from "react-bootstrap";
import ContentList from "./components/ContentList";
import {BookmarkListAPI, CategoryListAP, NewBookmarkAPI, UserAPI} from "./services/api";
import {useHistory} from "react-router-dom";
import MyCanvas from "./components/MyCanvas";

function App() {

    const [data , setData] = useState([])
    const [list , setList] = useState([])
    const [modalShow,setModalShow] = useState(false);
    const [canvasShow,setCanvasShow] = useState(false);
    const [loading , setLoading] = useState(false);
    const [category , setCategory] = useState([])
    const { user} = useAuth();
    const history = useHistory()

    useEffect( () => {
        // bookmark data
        BookmarkListAPI(user)
            .then((res) => {
                setData(JSON.parse(res.data).map(d => d.fields))
            })
            .catch((err) => {
                console.log(err)
                if (err.response.status === 401)
                    history.replace('/login')
            })

        // Category
        CategoryListAP(user)
            .then(res => {setCategory(res.data)})
            .catch(err => {console.log(err)})

    },[])

    const handleNewBookmark = (data) => {
        setLoading(true)
        NewBookmarkAPI(user,data)
            .then(res => {
                setData(prev => [...prev,res.data])
            })
            .catch(err => {console.log(err)})
        setLoading(false)
    }

    useEffect(() => {setList(data)},[data])

    const checkEmptyFilters = (filters) => {
        for (const filter in filters ) {
            if (filters[filter]) {
                return false
            }
        }
        return  true
    }

    const handleFilter = (filters) => {
        if (!checkEmptyFilters(filters))
            setList (data.filter(data => filters[data.category] === true))
        else
            setList(data)
    }

    return (
        <div>
            <MyNav setShow={setModalShow} />

            <Container className={'mt-5'}>
                <Row>
                    <Col className={'col-3 d-none d-md-block'}>
                        <ContentList category={category} handleFilter={handleFilter}  />
                    </Col>
                    <Col className={'m-1'}>
                        <BookmarkList data={list} loading={loading} setModalShow={setModalShow} setCanvasShow={setCanvasShow} />
                    </Col>
                </Row>
            </Container>

            <MyCanvas canvasShow={canvasShow} setCanvasShow={setCanvasShow} category={category} handleFilter={handleFilter}  />

            <MyModal category={category} setCategory={setCategory} show={modalShow} onHide={() => setModalShow(false)} handleNewBookmark={handleNewBookmark} />
        </div>
  );
}

export default App;
