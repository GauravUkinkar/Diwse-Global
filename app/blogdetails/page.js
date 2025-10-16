"use client";
import Blog_Details from "@/component/blog/Blog_Details";
import axios from "axios";
import {useSearchParams } from "next/navigation";
import React, { useEffect, useState, useCallback } from "react";

const Page = () => {
  // const { id } = useParams();
  const searchParams = useSearchParams();
  const [data, setData] = useState(null); // Set initial state to null
  const [loading, setLoading] = useState(false);

  const title = searchParams.get("slug");

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://tomcat.diwise.in/DiwiseGlobalAdminPanel/blog/getBytitle?title=${title
          .split("_")
          .join(" ")}`
      );

      setData(response?.data?.data);
    } catch (err) {
      console.error("Error fetching blog data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);
  console.log(loading);

  return (
    <div>
      <Blog_Details data={data} loading={loading} />
    </div>
  );
};

export default Page;
