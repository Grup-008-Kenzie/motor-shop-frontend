import { ListCommentsTest } from "./comments";
import { CommentsComponentStyle } from "./commentsCard/style";

export const CommentsComponent = () => {
  return (
    <>
      <CommentsComponentStyle>
        <h5>Comentarios</h5>
        {ListCommentsTest.map((comment: any) => (
          <li className="container-eachComment">
            <div className="container-userComment">
              <span>
                {comment.user.name === ""
                  ? ""
                  : comment.user.name[0].toUpperCase()}
              </span>
              <h5>{comment.user.name} </h5>
            </div>
            <p>{comment.content}</p>
          </li>
        ))}
      </CommentsComponentStyle>
    </>
  );
};
