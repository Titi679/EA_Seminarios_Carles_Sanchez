import { useState, useEffect } from "react";
//import { useHistory } from "react-router-dom";
import { Post } from "../../modules/post";
import './getPost.css'
import axios from "axios";

interface Props {
    post: Post | null;
}

function PostExample({ post }: Props) {

    return (
        <div className="user-details">
            {post ? (
                <div>
                    <h2>Post Details:</h2>
                    <form>
                        <input type="text" placeholder={post ? post.title.toString() : ''}/>
                        <input type="text" placeholder={post ? post.content.toString() : ''}/>
                        <input type="text" placeholder={post ? post.author.toString() : ''}/>
                    </form>
                </div>
            ) : (
                <p>Please select a post from the table.</p>
            )}
        </div>
    );
}

export default PostExample;