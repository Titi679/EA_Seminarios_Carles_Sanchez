import { useState, useEffect } from "react";
import { Post } from "../../modules/post";
import axios from "axios";
import './getPosts.css'

interface GetPostsProps {
    postsUpdated: boolean;
    setSelectedPost: React.Dispatch<React.SetStateAction<Post | null>>;
}

function GetPosts({ postsUpdated, setSelectedPost } : GetPostsProps){
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        axios.get('http://localhost:3000/post')
        .then((result) => setPosts(result.data))
        .catch((err) => console.log(err))
    }, [postsUpdated] );

    const handleUserClick = (post: Post) => {
        setSelectedPost(post);
    };


    return (
        <div className="users-container">
            <div className="table-container">
                <table className="users-table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Content</th>
                            <th>Author</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            posts.map((post, index ) => (
                                    <tr key = {index} onClick={() => handleUserClick(post)}>
                                    <td>{post.title}</td>
                                    <td>{post.content}</td>
                                    <td>{post.author}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default GetPosts;

