import React from 'react';
import PostForm from './components/PostForm'
import PostBoard from './components/PostBoard'
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      value: '',
      posts: []
    }
  }

  handleChange = (evt) =>{
    this.setState({
      value: evt.target.value
    })
  }

  handleSubmit= (evt) =>{
    evt.preventDefault()
    let pastPosts = this.state.posts
    this.setState({
      posts: [...pastPosts, this.state.value]
    })
    
  }

  render(){
    return (
      <div className="App">
        <h1>Tweedr</h1>
        <h3>What ya thinking?</h3>
        <PostForm handleSubmit={this.handleSubmit}  handleChange={this.handleChange}/>
        <PostBoard posts={this.state.posts}/>
      </div>
    )
  }

}

export default App;
