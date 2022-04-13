import {useState} from "react";
import "./AddPost.css";
import Error from "../../Components/Error/Error";
import SeePosts from "../../Hooks/SeePosts";

const AddPost = () => {
  //Estado inicial del formulario
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
 
  //Estado para mostrar/ocultar mensaje de error
  const [error, setError] = useState(false);

  //Extrayendo función del provider
  const {submitPostAdd} = SeePosts()

  const submitPost =  async (e) =>{
    e.preventDefault();

    //Validando que todos los campos no estén vacios
    if ([title, text].includes('')) {
      setError(true);
      return
    } else {
      //quitar mensaje error cuando todos los campos estén llenos
      setError(false);

      //Pasando datos hacia Provider
      submitPostAdd({title, text})
    }

    setTitle('')
    setText('')
    
  }
  

  

  return (
    <>
      <section className="container">
   
        <form  className="addPost" onSubmit={submitPost}>
           {error && <Error message="Error: all fields are required" />}
          <div className="addPost-title">
            <label htmlFor="title">Title</label>
            <input 
            onChange={e => setTitle(e.target.value)}
            value={title} 
            type="text" 
            id="title" 
            placeholder="Post title" />
          </div>
          <div className="addPost-text">
            <label htmlFor="text">Text</label>
            <textarea 
            onChange={e => setText(e.target.value)}
            value={text} 
            placeholder="add text..."></textarea>
            
          </div>

          <input className="register-btn" type="submit" value="Create" />
          
        </form>
      </section>
    </>
  );
};

export default AddPost;
