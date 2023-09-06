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
        <div className= "input">
           <textarea placeholder="Digite aqui seu comentário" id="comments" wrap="soft"/>     
           <button>Comentar</button>
        </div>
        <div className="container-span">
          <span>Gostei Muito</span>
          <span>Incrivel</span>
          <span>Recomendei para meus amigos</span>
        </div>
        
      </CommentsFormStyle>
    </>
  );
};
