import React from "react";
import SelectedPost from "../../pages/SelectedPost";
import {Navigate, Route, Routes} from "react-router-dom";
import About from "../../pages/About";
import Posts from "../../pages/Posts";
import Error from "../../pages/Error";
import Login from "./../../pages/Login";


const AppRouter = () => {
    return (
        <Routes>
            <Route path="/about" element={<About />}/>
            <Route path="/posts" element={<Posts />}/>
            <Route path="/error" element={<Error />}/>
            <Route path="/" element={<Login />}/>
            <Route path="/posts/:postId" element={<SelectedPost/>} />
            <Route path="*" element={<Navigate replace={true} to="/error" />} />
        </Routes>
    );
};

export default AppRouter;