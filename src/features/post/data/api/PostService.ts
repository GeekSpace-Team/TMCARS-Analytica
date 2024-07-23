import { PostApiEntity } from "../entity/PostApiEntity";
import PostApi from "./PostApi";

export class PostService {
  async getPosts(): Promise<PostApiEntity[]> {
    const posts = await PostApi.get<PostApiEntity[]>("posts");
    return posts.data;
  }
}
