import Post from "./Post";
import { useContext, useEffect } from "react";
import WelcomeMessage from "./WelcomeMessage";
import PostListContext from "../../store/post-list-store";
import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";



const PostList = () => {
    const { postList, fetching } = useContext(PostListContext);

    
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