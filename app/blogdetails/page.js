"use client";

import Blog_Details from "@/component/blog/Blog_Details";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState, useCallback, Suspense } from "react";

// 🔹 This ensures the page is NOT statically pre-rendered
export const dynamic = "force-dynamic";

const BlogDetailsContent = () => {
  const searchParams = useSearchParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const title = searchParams.get("slug");

  const fetchBlogs = useCallback(async () => {
    if (!title) return;
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
  }, [title]);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  return <Blog_Details data={data} loading={loading} />;
};

const Page = () => {
  return (
    <Suspense fallback={<div>Loading blog details...</div>}>
      <BlogDetailsContent />
    </Suspense>
  );
};

export default Page;
