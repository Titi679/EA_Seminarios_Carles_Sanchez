import { useState } from "react";
import axios from "axios";
import { Post } from "../modules/post";
import './updatePost.css';

interface UpdatePostProps {
    updatePostList: () => void;
    post: Post;
}

interface FormErrors {
    [key: string]: string;
}

function UpdatePost({ updatePostList, post }: UpdatePostProps) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const [errors, setErrors] = useState<FormErrors>({});

    


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (title) {
            post.title = title;
        }
        if (content) {
            post.content = content;
        }
        if (author) {
            post.author = author;
        }
        axios.put("http://localhost:3000/post/"+post._id, post)
            .then(result => {
                console.log(result);
                updatePostList();
                setTitle('');
                setContent('');
                setAuthor('');
            })
            .catch(err => console.error(err));

    };


    return (
        <div>
            <form onSubmit={handleSubmit} className="create-user-form">
                <div>
                    <label>Title</label>
                    <input type="text" placeholder={post ? post.title.toString() : ''} value={title} onChange={(e) => { setTitle(e.target.value); }} />
                    {errors.title && <span style={{ color: 'red' }}>{errors.title}</span>}
                </div>
                <div>
                    <label>Content</label>
                    <input type="text" placeholder={post ? post.content.toString() : ''} value={content} onChange={(e) => { setContent(e.target.value); }} />
                    {errors.content && <span style={{ color: 'red' }}>{errors.content}</span>}
                </div>
                <div>
                    <label>Author</label>
                    <input type="text" placeholder={post ? post.author.toString() : ''} value={author} onChange={(e) => { setAuthor(e.target.value); }} />
                    {errors.author && <span style={{ color: 'red' }}>{errors.author}</span>}
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default UpdatePost;