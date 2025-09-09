import React from 'react'
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CreatePost from './components/CreatePost.jsx'
import PostList from './components/PostList.jsx'
import App from './App.jsx'
import { postLoader } from './components/PostList.jsx';      
import { createPostAction } from './components/CreatePost.jsx';
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />, 
        children: [
          {
            path: '/',
            element: <PostList />,
            loader: postLoader,
          },
          {
            path: "/create-post",
            element: <CreatePost />,
            action: createPostAction,
          }
        ]
    },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
