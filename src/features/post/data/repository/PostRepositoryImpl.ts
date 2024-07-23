import { PostUIEntity } from "../../domain/model/PostUiEntity";
import { PostRepository } from "../../domain/repository/PostRepository";
import { PostService } from "../api/PostService";
import { convertPostUIEntity } from "../entity/PostApiEntity";

export class PostRepositoryImpl implements PostRepository {
  constructor(private service: PostService) {
    this.service = new PostService();
  }
  getPosts = async (): Promise<PostUIEntity[]> => {
    const data = await this.service.getPosts();
    return data.map((post) => convertPostUIEntity(post));
  };
  addPosts = (title: string): PostUIEntity => {
    throw new Error(title);
  };
}
