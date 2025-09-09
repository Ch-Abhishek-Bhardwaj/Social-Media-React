import Post from "./Post";
import { useContext } from "react";
import WelcomeMessage from "./WelcomeMessage";
import PostListContext from "../../store/post-list-store";
import { useLoaderData } from "react-router-dom";



const PostList = () => {
    
    const postList = useLoaderData();
    
    return (
        <>
        
            {postList.length === 0 && <WelcomeMessage />}
            {postList.map((post, index) => (
                <Post key={`${post.id}-${index}`} post={post} />
            ))}
        </>
    );
};

export const postLoader=()=>{
    return fetch("https://dummyjson.com/posts")
            .then(response => response.json())
            .then(data =>{
                return data.posts;
            });
}

export default PostList;