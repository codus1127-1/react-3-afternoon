import React, { Component } from 'react';

import './App.css';

import Header from './Header/Header';
import Compose from './Compose/Compose';
import Post from './Post/Post'
import Axios from 'axios';

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };

    this.updatePost = this.updatePost.bind( this );
    this.deletePost = this.deletePost.bind( this );
    this.createPost = this.createPost.bind( this );
  }
  
  componentDidMount() {
    Axios.get('https://practiceapi.devmountain.com/api/posts')
    .then(res => {
      this.setState({posts: res.data})
    })

  }

  updatePost(id, text) {
    Axios.put(`https://practiceapi.devmountain.com/api/posts?id=${id}`, {text})
    .then(res => {
      this.setState({ posts: res.data})
    })
  
  }

  deletePost() {

  }

  createPost() {

  }

  render() {
    const { posts } = this.state;

    return (
      <div className="App__parent">
        <Header />

        <section className="App__content">

          <Compose />

          {posts.map( post => (
            <Post 
            key={ post.id} 
            text={post.text} 
            date={post.date}
            id={post.id}
            updatePostFn={ this.updatePost} />
          ))}
          
        </section>
      </div>
    );
  }
}

export default App;
