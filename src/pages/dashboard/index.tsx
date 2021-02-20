import React, { useState } from 'react';
import './dashboard.scss';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ItfUser } from '../../app/interfaces';
import { selectUsers, loadUsers } from "./dashboardSlice";
import Carousel from 'react-bootstrap/Carousel';

function Dashboard() {
    const [index, setIndex] = useState(0);
    const users = useSelector(selectUsers);
    const dispatch = useDispatch();
    const [loading, setLoading]: [boolean, (loading: boolean) => void] = useState<boolean>(true);
    if (loading) {
        dispatch(loadUsers());
        setLoading(!loading);
    }
    let setImages = [
        "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/03/14/14/headphones-afp.jpg",
        "https://i1.wp.com/highlysensitiverefuge.com/wp-content/uploads/2018/08/what-is-highly-sensitive-person-meaning.jpg",
        "https://lamenteesmaravillosa.com/wp-content/uploads/2017/10/platon-sentado.jpg",
        "https://lamenteesmaravillosa.com/wp-content/uploads/2018/04/socrates.jpg",
        "https://www.cinconoticias.com/wp-content/uploads/albert-einstein-reflexiones-1.jpg",
        "https://www.dondeir.com/wp-content/uploads/2020/07/frida-kahlo-en-linea.jpg",
        "https://ak.picdn.net/shutterstock/videos/1021295185/thumb/1.jpg",
        "https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/SannedeJong_1280p.jpg",
        "https://wallpapercave.com/wp/wp2402464.jpg",
        "https://wallpapercave.com/wp/wp2402485.jpg"
    ]

    const handleSelect = (selectedIndex: number, e: any) => {
        setIndex(selectedIndex);
    };

    const userNow = users[index] || {'company':{}, 'address':{'geo':{}}};

    return (
        <div className={'body-dashboard'}>
            <Carousel interval={50000} activeIndex={index} onSelect={handleSelect}>
                {
                    users.map((user: ItfUser, index: number) =>
                        <Carousel.Item>

                                <img
                                    className="d-block w-100"
                                    src={setImages[index]}
                                    alt={user.name}
                                />
                                <Carousel.Caption>
                                    <h1>{user.name}</h1>
                                </Carousel.Caption>
                        </Carousel.Item>
                    )}
            </Carousel>
            <dialog open>

            <section>
                <small>General Information</small>
                <p>{userNow.name}.</p>
                <p>{userNow.username}.</p>
            </section>
            </dialog>
            <dialog open>

            <section>
                <small>Contact Information</small>
                <p>{userNow.email}.</p>
                <p>{userNow.website}.</p>
                <p>{userNow.phone}.</p>
            </section>
            </dialog>
            <dialog open>

            <section>
                <small>Company</small>
                <p>{userNow.company.name}.</p>
                <p>{userNow.company.catchPhrase}.</p>
                <p>{userNow.company.bs}.</p>
            </section>
            </dialog>
            <dialog open>

            <section>
                <small>Address</small>
                <p>{userNow.address.city}.</p>
                <p>{userNow.address.street}.</p>
                <p>{userNow.address.suite}.</p>
                <p>{userNow.address.zipcode}.</p>
            </section>
            </dialog>
            <dialog open>
                <section>
                    <small>Coordinates</small>
                    <p>{userNow.address.geo.lat}.</p>
                    <p>{userNow.address.geo.lng}.</p>
                </section>
            </dialog>
            <Link to={'users/' + userNow.id}>
            <dialog className={'btn-continue'} open>
                <section>
                    <h1>Posts</h1>
                </section>
            </dialog>
            </Link>


        </div>
    )
}

export default Dashboard;
