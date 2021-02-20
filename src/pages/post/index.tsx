import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import {loadComments, selectComments} from "./postSlice";
import {ItfComment} from "../../app/interfaces";

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
            {
                comments.map((comment:ItfComment) => <li><span>{comment.name}</span></li>)
            }
        </div>
    )
}

export default Post;
