import { api } from '../services/api'

export const getPosts = async () => {
    const {data} = await api.get('/DBblog'); 

    if(data){
        return data;
    }

    return []
}

export const getPostBySlug = async (id) => {
    console.log(id)
    const {data} = await api.get(`/DBblog?id=eq.${id}`)

    if (data && data.length > 0) {
        return data[0];
    }

    return {}
}