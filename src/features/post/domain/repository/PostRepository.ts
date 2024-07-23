import { PostUIEntity } from "../model/PostUiEntity";

export interface PostRepository {
  getPosts: () => Promise<PostUIEntity[]>;
  addPosts: (title: string) => PostUIEntity;
}
