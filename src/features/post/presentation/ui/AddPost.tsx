import { PostService } from "../../data/api/PostService";
import { PostRepositoryImpl } from "../../data/repository/PostRepositoryImpl";
import { PostUseCase } from "../../domain/usecase/PostUseCase";
import PostViewModel from "../viewmodel/PostViewModel";

const AddPost = () => {
  const service = new PostService();
  const postRepo = new PostRepositoryImpl(service);
  const useCase = new PostUseCase(postRepo);
  const viewModel = PostViewModel(useCase);
  return (
    <div>
      <input />
      <button
        onClick={() => {
          viewModel.addPost("Hello");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddPost;
