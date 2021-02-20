import {Methodtype} from "./types";

const axios = require('axios').default;

let URL_PROD = "https://jsonplaceholder.typicode.com/";
let URL_BASE = URL_PROD;

export const Consumer = async (method:Methodtype, url:string, headers:object, data:string, params:object ) => {
    let final_headers : any = headers;
    let petition : any = {"error": "error"};
    try{
        petition = await axios(url, {
            headers: final_headers,
            data: data,
            method: method.method,
            params: params
        });
    }catch (error) {
        console.error(error);
        petition = {"error": error}
    }
    if(petition.error) {
        alert(petition.error);
        petition.data = [];
    }
    return petition;
};

export const apiGetUsers = async () => {
    let {data, error} = await Consumer({method:'get'}, `${URL_BASE}users`,{}, "", {});
    return  data || error;
};

export const apiGetPosts = async (userId:string) => {
    let {data, error} = await Consumer({method:'get'}, `${URL_BASE}users/${userId}/posts`,{}, "", {});
    return  data || error;
};
export const apiGetComments = async (postId:string) => {
    let {data, error} = await Consumer({method:'get'}, `${URL_BASE}posts/${postId}/comments`,{}, "", {});
    return  data || error;
};
