import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { User } from '../modules/user'
import GetUsers from '../GET/User/getUsers';
import PropExemple from '../GET/User/getUser';
import CreateUser from '../POST/User/createUser';
import CreatePost from '../POST/Post/createPost';
import UpdateUser from '../PUT/updateUser';
import '@fontsource/inter';
import UpdatePost from '../PUT/updatePost';
import PostExample from '../GET/Post/getPost';
import { Post } from '../modules/post';
import GetPosts from '../GET/Post/getPosts';
import axios from 'axios';


function AppUser() {

  const [users, setUsers] = useState<User[]>([]);
  const [usersUpdated, setUsersUpdated] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const [postsUpdated, setPostsUpdated] = useState(false);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  
  const updateUserList = () => {
      setUsersUpdated(!usersUpdated);
  };

  const updatePostList = () => {
    setPostsUpdated(!postsUpdated);
  };

  useEffect(() => {
    axios.get('http://localhost:3000/user')
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err))
  }, [usersUpdated]);

  return (
    <div className="container" >
      <div className="title">
        <h1 >Seminario 8</h1>
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="component">
        <h2>Get Users Component</h2>
        <GetUsers usersUpdated={usersUpdated} setSelectedUser={setSelectedUser}/>
      </div>
      <div className="component">
        <h2>Prop Example</h2>
        <PropExemple user={selectedUser} />
      </div>
      <div className="component">
        <h2>Update User</h2>
        {selectedUser && <UpdateUser updateUserList={updateUserList} user={selectedUser} />}
      </div>
      <div className="component">
        <h2>Create User Component</h2>
        <CreateUser updateUserList={updateUserList} users={users} />
      </div>
      <div className="component">
        <h2>Get Posts Component</h2>
        <GetPosts postsUpdated={postsUpdated} setSelectedPost={setSelectedPost}/>
      </div>
      <div className="component">
        <h2>Post Example</h2>
        <PostExample post={selectedPost} />
      </div>
      <div className="component">
        <h2>Update Post</h2>
        {selectedPost && <UpdatePost updatePostList={updatePostList} post={selectedPost} />}
      </div>
      <div className="component">
        <h2>Create Post Component</h2>
        <CreatePost updatePostList={updatePostList} />
      </div>
    </div>
);

}

export default AppUser;
