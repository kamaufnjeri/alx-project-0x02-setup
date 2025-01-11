import Button from "@/components/common/Button";
import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import { Post } from "@/interfaces";
import axios from "axios";
import { useEffect, useState } from "react";

const Posts: React.FC<{ posts: Post[]}> = ({ posts }) => {

    
    
  return (
    <div>
      <Header />
      <main className="flex flex-col justify-between items-center">
        <h1>Posts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 m-2">
          {posts &&
            posts.map((post, index) => (
              <PostCard key={index} title={post.title} content={post.body} userId={post.userId}/>
            ))}
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}
export default Posts;
