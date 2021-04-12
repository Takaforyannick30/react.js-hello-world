import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';


class App extends Component{
  render() {
    return (
      <div className="App">
        <Header />
       
        <Intro />
      </div>
    );
  }
  }


  class Intro extends Component {
    render() {
      return(
        <div>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
      );
    }
  }
 

export default App;
