import axios from 'axios';
import { IPost } from '../App';

export const client = axios.create({
    baseURL: "https://localhost:8000", 
});

export const postUpload =async (data:IPost)=>{
    const formData = new FormData();
    formData.append('photos', JSON.stringify(data));
    const response = await client.post('/upload',formData,{
        headers:{
            "Content-Type":"multipart/form-data"
        },
    });

    return response;
}