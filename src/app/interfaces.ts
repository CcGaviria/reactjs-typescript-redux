interface ItfCompany {
    name: string;
    catchPhrase: string;
    bs: string;
}

interface ItfCoordinates {
    lat: string;
    lng: string;
}

interface ItfAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: ItfCoordinates;

}

export interface ItfUser {
    id?: number;
    name: string;
    username: string;
    email: string;
    address: ItfAddress;
    phone: string;
    website: string;
    company: ItfCompany;
}

export interface ItfPost {
    userId?: number;
    id?: number;
    title: string;
    body: string;
}
export interface ItfComment {
    postId?: number;
    id?: number;
    name: string;
    email: string;
    body: string;
}
