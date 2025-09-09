import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { PostListProvider } from "../store/post-list-store";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import './App.css'
import { useState } from "react";

function App() {

  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
    <div className="app-Container">
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
      <div className="app-Content">
        <Header/>
        <Outlet />

        <Footer/>
      </div>
    </div>
    </PostListProvider>
    
  );
}

export default App
