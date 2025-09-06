import { useRef, useContext } from "react";
import PostList from "../../store/post-list-store";



const CreatePost = () => {

  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const titleElement = useRef();
  const bodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const userId = userIdElement.current.value;  
    const title = titleElement.current.value;
    const body = bodyElement.current.value;
    const reaction = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(' ');

    userIdElement.current.value = "";
    titleElement.current.value = "";
    bodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";
    
    
    addPost(userId, title, body, reaction, tags);
  }


    return (
        <form className="create-post" onSubmit={handleSubmit}>

        <div className="mb-3">
          <label htmlFor="userId" className="form-label">Enter your user id</label>
          <input type="text" ref={userIdElement} className="form-control" id="body" placeholder="your user id" />
        </div>


        <div className="mb-3">
          <label htmlFor="title" className="form-label">Post Title</label>
          <input type="text" ref={titleElement} className="form-control" id="title" placeholder="How are you feeling today?" />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label">Post Content</label>
          <textarea type="text" rows="3" ref={bodyElement} className="form-control" id="body" placeholder="Tell us more about that.." />
        </div>

        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">No. of Reaction</label>
          <input type="text" ref={reactionsElement}  className="form-control" id="reactions" placeholder="How many people reacted to your post" />
        </div>

        <div className="mb-3">
          <label htmlFor="tags" className="form-label">Enter your Hastags here</label>
          <input type="text" ref={tagsElement} className="form-control" id="tags" placeholder="Enter your Hastags here" />
        </div>

        
        <button type="submit" className="btn btn-primary">Post</button>
      </form>
    );
};  

export default CreatePost;