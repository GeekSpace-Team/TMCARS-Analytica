import { PostUIEntity } from "../model/PostUiEntity";
import { PostRepository } from "../repository/PostRepository";

export class PostUseCase {
  constructor(private repo: PostRepository) {}
  getPosts(): Promise<PostUIEntity[]> {
    return this.repo.getPosts();
  }

  addPost(title: string): PostUIEntity {
    return this.addPost(title);
  }
}
