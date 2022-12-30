import React from "react";
import { Route, Routes } from "react-router-dom";
import { CreatePost, DetailPost, Home, UpdatePost } from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<CreatePost />} />
      <Route path="/detail/:id" element={<DetailPost />} />
      <Route path="/update/:id" element={<UpdatePost />} />
    </Routes>
  );
};

export default Router;
