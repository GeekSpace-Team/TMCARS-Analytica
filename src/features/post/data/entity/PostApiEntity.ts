import { PostUIEntity } from "../../domain/model/PostUiEntity";

export interface PostApiEntity {
  user_Id: number;
  id: number;
  title: string;
  body: string;
}

const convertPostUIEntity = (entity: PostApiEntity): PostUIEntity => {
  return {
    title: entity.title,
    body: entity.body,
    id: entity.id,
    userId: entity.user_Id,
  };
};

export { convertPostUIEntity };
