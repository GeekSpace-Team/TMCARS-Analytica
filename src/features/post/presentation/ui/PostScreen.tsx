import { useEffect } from "react";
import PostViewModel from "../viewmodel/PostViewModel";
import { PostUseCase } from "../../domain/usecase/PostUseCase";
import { PostRepositoryImpl } from "../../data/repository/PostRepositoryImpl";
import { PostService } from "../../data/api/PostService";
import AddPost from "./AddPost";

const PostScreen = () => {
  const service = new PostService();
  const postRepo = new PostRepositoryImpl(service);
  const useCase = new PostUseCase(postRepo);
  const viewModel = PostViewModel(useCase);
  useEffect(() => {
    viewModel.getPosts();
  }, [viewModel]);
  return (
    <div>
      <AddPost />
      {viewModel.posts!.map((post, index) => {
        return <div key={`post-${index}`}>{post.title}</div>;
      })}
    </div>
  );
};

export default PostScreen;
