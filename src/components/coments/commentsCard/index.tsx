export const CommentCardComponent = ({ comment }: any) => {
  return (
    <>
      <li>
        <div>
          <span>
            {comment.user.name === "" ? "" : comment.user.name[0].toUpperCase()}
          </span>
          <h5>{comment.user.name} </h5>
        </div>
        <p>{comment.content}</p>
      </li>
    </>
  );
};
