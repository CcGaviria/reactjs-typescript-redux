import React, {useEffect, useState} from 'react';
import {
    Link,
    useParams
} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectPosts, loadPosts} from "./userSlice";
import {ItfPost} from "../../app/interfaces";
import {Col, Nav, Row, TabContainer, TabPane} from "react-bootstrap";
import TabContent from "react-bootstrap/TabContent";

function User(){
    const posts = useSelector(selectPosts);
    const dispatch = useDispatch();
    let { user } = useParams();
    const [loading, setLoading]: [boolean, (loading: boolean) => void] = useState<boolean>(true);

    if(loading) {
        dispatch(loadPosts(user));
        setLoading(!loading);
    }

    useEffect(()=>{
        document.title= user + ' | Posts';
    });

    return (
        <div>
            <h1>User {user}</h1>
            <h3>Posts</h3>

            <TabContainer id="left-tabs-example" defaultActiveKey="0">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            {
                                posts.map((post:ItfPost, index:number) =>
                                    <Nav.Item>
                                        <Nav.Link eventKey={index}>{post.title}</Nav.Link>
                                    </Nav.Item>
                                )
                            }
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <TabContent>
                            {
                                posts.map((post:ItfPost, index:number) =>
                                    <TabPane eventKey={index}>
                                        <div>
                                            <h2>{post.title}</h2>
                                            <span>{post.body}</span>
                                        </div>
                                        <Link to={'/posts/'+post.id} replace >
                                            See Comments
                                        </Link>
                                    </TabPane>
                                    )
                            }
                        </TabContent>
                    </Col>
                </Row>
            </TabContainer>
        </div>
    )
}

export default User;
