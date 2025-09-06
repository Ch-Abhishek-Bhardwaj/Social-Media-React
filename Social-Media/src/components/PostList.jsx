import Post from "./Post";
import { useContext } from "react";
import WelcomeMessage from "./WelcomeMessage";
import PostListContext from "../../store/post-list-store";

const PostList = () => {
    const { postList, addInitialPost } = useContext(PostListContext);

    const  handleGetPostsClick = () => {
        fetch("https://dummyjson.com/posts")
        .then(response => response.json())
        .then(data =>{
            addInitialPost(data.posts);
        })
    }
    
    return (
        <>
            {postList.length === 0 && <WelcomeMessage onGetPostsClick={handleGetPostsClick} />}
            {postList.map(post => (
                <Post key={post.id} post={post} />
            ))}
        </>
    );
};

export default PostList;