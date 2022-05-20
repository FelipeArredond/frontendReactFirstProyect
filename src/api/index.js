import axios from "axios";

const url = 'https://backendnodejstzuzulcode.uw.r.appsot.com';

const instance = axios.create({
    baseURL: url
})

const post = (url,data) => {
    return instance.post(url,data)
}

const posWithToken = (url,data) =>{
    return instance.post(url,data,{
        headers:{
            'Authorization': 'Bearer'+localStorage.getItem('token')
        }
    })
}

export default instance;

export  {
    post,
    posWithToken
}