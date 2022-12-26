import $api from "../http";

export default class PostService {
  static getPosts() {
    return $api.get('/posts')
  }
  static getPost(id) {
    return $api.get(`/posts/${id}`)
  }
}