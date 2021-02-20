import React, {useEffect, useState} from 'react';
import {
    Link,
    useParams
} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectPosts, loadPosts} from "./userSlice";
import {ItfPost} from "../../app/interfaces";

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
            {
                posts.map((post:ItfPost) => <li><Link to={'/posts/'+post.id} replace >{post.title}</Link></li>)
            }
        </div>
    )
}

export default User;
