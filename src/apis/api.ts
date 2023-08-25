
import http from "../http/http"

export const getPrice =  async ()=> {
    const result = await http.get('/users/price')
    return result.data
}

export const getPost =  async ()=> {
    const result = await http.get('/users/post')
    return result.data
}

export const getPostId = async (id : string ) => {
    const post = await http.get(`/users/post/${id}`)
    return post.data
}

