"use client";
import Blog_Details from "@/component/blog/Blog_Details";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState, useCallback } from "react";

const Page = () => {
  const { id } = useParams();
  const [data, setData] = useState(null); // Set initial state to null

  const fetchBlogs = useCallback(async () => {
    if (!id) return; // Prevent fetching if id is undefined

    try {
      const response = await axios.get(
        `https://tomcat.diwise.in/DiwiseGlobalAdminPanel/blog/getBybId?bId=${id}`
      );

      console.log(response)
      setData(response.data.data);
    } catch (err) {
      console.error("Error fetching blog data:", err);
    }
  }, [id]); // useCallback ensures the function is re-created only when id changes

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]); // ✅ Dependency is now stable

  if (!id) return <p>Loading...</p>; // Show loading if id is not available yet
  if (!data) return <p>Fetching blog...</p>; // Show fetching message

  return (
    <div>
      <Blog_Details data={data} />
    </div>
  );
};

export default Page;
