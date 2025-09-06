import Post from "./Post";
import { useContext, useEffect } from "react";
import WelcomeMessage from "./WelcomeMessage";
import PostListContext from "../../store/post-list-store";
import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";



const PostList = () => {
    const { postList, addInitialPost } = useContext(PostListContext);

    const [ fetching, setFetching ] = useState(false);
    
    useEffect(()=>{
        setFetching(true);
        
        const controller = new AbortController();
        const signal = controller.signal;

        fetch("https://dummyjson.com/posts", {signal})
            .then(response => response.json())
            .then(data =>{
                addInitialPost(data.posts);
                setFetching(false);
                console.log("Posts fetched successfully");
            });
        return ()  =>{
            console.log("Cleaning Up using Effect");
            controller.abort();
        }    
    },[])
 
    return (
        <>
        {fetching && <LoadingSpinner />}
            {!fetching && postList.length === 0 && <WelcomeMessage />}
            {!fetching && postList.map((post, index) => (
                <Post key={`${post.id}-${index}`} post={post} />
            ))}
        </>
    );
};

export default PostList;