import React from "react";

function BlogPost(props) {
    const formattedDate = props.date.toDateString();
    return (
        <div className="border rounded-lg p-4 shadow-md bg-white mb-4 hover:shadow-lg">
            <h1 className="text-2xl font-bold mb-2 ">{props.title}</h1>
            <p className="text-[12px] text-gray-400 mb-3">{formattedDate}</p>
            <p className="text-gray-700">{props.content}</p>
            <p className="text-[12px] mt-2 text-gray-400">By: {props.postBy}</p>
        </div>
    );
}

export default BlogPost;
