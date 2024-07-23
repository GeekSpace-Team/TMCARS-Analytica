import axios from "axios";

const PostApi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {},
});

export default PostApi;
