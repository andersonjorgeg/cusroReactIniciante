import './App.css';
import { Component } from 'react';

class App extends Component{
  state = {
      posts: [
        {
          id: 1,
          title: 'O título 1',
          body: 'O corpo 1'
        },
        {
          id: 2,
          title: 'O título 2',
          body: 'O corpo 2'
        },
        {
          id: 3,
          title: 'O título 3',
          body: 'O corpo 3'
        },
      ]
    };

  render() {
    const { posts } = this.state;

    return (
      <div className="App">
        {posts.map(post => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}


/* function App() { /* App() 
  
  return (
    <div className="App">
      <header className="App-header"> 
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Olá mundo!!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

export default App;