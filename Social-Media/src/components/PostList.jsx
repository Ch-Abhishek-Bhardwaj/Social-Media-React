import Post from "./Post";
import { useContext } from "react";
import PostListContext from "../../store/post-list-store";

const PostList = () => {
    const { postList } = useContext(PostListContext);
    
    return (
        <div>
            {postList.map(post => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    );
};

export default PostList;