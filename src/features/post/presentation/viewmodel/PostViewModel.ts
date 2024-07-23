import { useState } from "react";
import { PostUIEntity } from "../../domain/model/PostUiEntity";
import { PostUseCase } from "../../domain/usecase/PostUseCase";

export default function PostViewModel(useCase: PostUseCase) {
  const [posts, setPosts] = useState<PostUIEntity[] | undefined>([]);
  async function getPosts() {
    const response = await useCase.getPosts();
    setPosts(response);
  }

  function addPost(title: string): PostUIEntity {
    return useCase.addPost(title);
  }

  return {
    posts,
    getPosts,
    addPost,
  };
}
