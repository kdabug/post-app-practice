import React from 'react';
import PostForm from './components/PostForm'
import './App.css';

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <h1>Tweedr</h1>
        <h3>What ya thinking?</h3>
        <PostForm />
      </div>
    )
  }

}

export default App;
