import React from "react";

import { BlogContextProvider } from "../components/blog/BlogContext";
import BlogArticle from "../components/blog/BlogArticle";

const Blog = () => {
  return (
    <>
      <BlogContextProvider>
        <BlogArticle />
      </BlogContextProvider>
    </>
  );
};

export default Blog;
