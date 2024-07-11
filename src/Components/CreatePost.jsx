import React, { useState, useEffect } from "react";
import BlogPost from "./BlogPost";
import postsData from "../posts.json";

function CreatePost() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(postsData);
    }, []);

   

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl text-center font-bold mb-8">
                Latest Blog Posts</h1>
            <div>
                {posts.map(post => (
                    <BlogPost 
                    key={post.id}
                    title={post.title}
                    content={post.content}
                    postBy={post.postBy}
                    date={new Date()} />
                ))}
            </div>
        </div>

    );
}

export default CreatePost;
