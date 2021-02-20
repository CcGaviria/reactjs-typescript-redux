import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import {loadComments, selectComments} from "./postSlice";
import {ItfComment} from "../../app/interfaces";
import {Accordion, Card} from "react-bootstrap";

function Post(){
    const comments = useSelector(selectComments);
    const dispatch = useDispatch();
    let { post } = useParams();
    const [loading, setLoading]: [boolean, (loading: boolean) => void] = useState<boolean>(true);

    if(loading) {
        dispatch(loadComments(post));
        setLoading(!loading);
    }
    return (
        <div>
            <h1>Post</h1>
            <h3>Comments</h3>
            <Accordion defaultActiveKey="0">
                {
                    comments.map((comment:ItfComment, index: number) =>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey={index.toString()}>
                                {index} | {comment.email}
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey={index.toString()}>
                                <Card.Body>
                                    <small>Database id: {comment.id} </small>
                                    <small>Post Id: {comment.postId}</small>
                                    <h5>Name: {comment.name}</h5>
                                    <h6>Body: {comment.body}</h6>
                                    <h6>Email: <a href={`mailto:${comment.email}`}>{comment.email}</a></h6>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>)
                }
            </Accordion>
        </div>
    )
}

export default Post;
