"use client";
import Blog_Details from "@/component/blog/Blog_Details";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const { id } = useParams();
  const [data, setdata] = useState([]);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(
        `https://api.diwiseglobal.com/auth/blogs/${id}/`
      );
      setdata(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <div>
      
      <Blog_Details data={data}/>
    </div>
  );
};

export default page;
