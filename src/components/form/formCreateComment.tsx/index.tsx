import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { commentFormSchema } from "./commentFormSchema";
import { CommentsFormStyle } from "./style";

interface IComment {
  content: string;
}

export const CreateCommentForm = () => {
  // const{register,handleSubmit,formState:{errors},reset);
  // }}=useForm<IComment>({resolver:yupResolver(commentFormSchema)})
  // }
  // const submitEvent:SubmitHandler<IComment> = (formData) =>{
  // console.log(formData);
  // reset();
  // }
  return (
    <>
      <CommentsFormStyle>
        <div className="container-userComment">
          <span>SL</span>
          <h5>Samuel Leao</h5>
        </div>
        <div className="container-comment">
          <label htmlFor="textarea"></label>
          <textarea name="" id="" rows={5} cols={50}></textarea>
        </div>
        <button>Comentar</button>
      </CommentsFormStyle>
    </>
  );
};
