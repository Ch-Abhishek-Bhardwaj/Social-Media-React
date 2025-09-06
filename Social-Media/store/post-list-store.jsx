import { createContext, useReducer } from "react";

export const PostList = createContext({
    postList: [],
    addPost: () => {},
    deletePost: () => {}
});

const postListReducer = (currPostList, action) => {
    if(action.type === "DELETE_POST"){
        return currPostList.filter(post => post.id !== action.payload.postId);
    }else if(action.type === "ADD_POST"){
        return [action.payload , ...currPostList];
    }
    return currPostList;
}

const PostListProvider = ({children}) => {
    const [postList, dispatchPostList] = useReducer(postListReducer, defaultPostList);

    const addPost = (userId, title, body, reaction, tags) => {
        dispatchPostList({
            type: "ADD_POST",
            payload: {
                id: Date.now(),
                userId: userId,
                title: title,
                body: body,
                reaction: reaction,
                tags: tags
            }
        });
    };
    const deletePost = (postId) => {
        dispatchPostList({
            type: "DELETE_POST",
            payload: {
                postId: postId
            }
        });
    };

    return (
        <PostList.Provider value={{
            postList,
            addPost,
            deletePost
        }}>
            {children}
        </PostList.Provider>
    );
};

const defaultPostList = [
    {
        id: 1,
        title: "Working in a project",
        body: "I am working in a project. I am learning React.",
        reaction: 2,
        userId: 1,
        tags: ['React', 'Project']
    },
    {
        id: 2,
        title: "Completed B.tech",
        body: "I have completed my B.tech. I am learning how to build applications.",
        reaction: 15,
        userId: 1,
        tags: ['React', 'Project']
    }
];

export { PostListProvider };
export default PostList;