"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Bloglist = () => {
    const [blog, setBlog] = useState([]);

    const fetchBlog = async () => {
      const response = await axios.get("/api/tasks");
      setBlog(response.data.blog);
      console.log(response.data.blog);
    };

    useEffect(() => {
      fetchBlog();
    }, []);

    return (
    <div></div>
    );
}

export default Bloglist