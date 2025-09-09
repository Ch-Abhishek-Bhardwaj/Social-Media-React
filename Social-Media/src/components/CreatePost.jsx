import { useRef, useContext } from "react";
import PostList from "../../store/post-list-store";
import { redirect } from "react-router-dom";
import { Form } from "react-router-dom";


const CreatePost = () => {

 


    return (
        <Form  method="post" className="create-post">

        <div className="mb-3">
          <label htmlFor="userId" className="form-label">Enter your user id</label>
          <input type="text" name="userId" className="form-control" id="body" placeholder="your user id" />
        </div>


        <div className="mb-3">
          <label htmlFor="title" className="form-label">Post Title</label>
          <input type="text" name="title" className="form-control" id="title" placeholder="How are you feeling today?" />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label">Post Content</label>
          <textarea type="text" rows="3" name="body" className="form-control" id="body" placeholder="Tell us more about that.." />
        </div>

        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">No. of Reaction</label>
          <input type="text" name="reactions"  className="form-control" id="reactions" placeholder="How many people reacted to your post" />
        </div>

        <div className="mb-3">
          <label htmlFor="tags" className="form-label">Enter your Hastags here</label>
          <input type="text" name="tags" className="form-control" id="tags" placeholder="Enter your Hastags here" />
        </div>

        
        <button type="submit" className="btn btn-primary">Post</button>
      </Form>
    );
};  
export async function createPostAction(data) {
const formData = await data.request.formData();
const postData = Object.fromEntries(formData);
postData.tags = postData.tags.split(" ");
console.log(postData);
  fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postData)
  })
  .then(res => res.json())
  .then(post => {
    console.log(`Post ${post.id} sended successfully`);
  });
  return redirect("/");
    
}

export default CreatePost;