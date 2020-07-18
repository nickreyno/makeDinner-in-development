import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state ={
      test : "work"
    }

  }
      getResults = () => {
        console.log('working')
      }
  render(){
  return (
    <div className="App">
      <button onClick={this.getResults}>a button</button>
      <h1>{this.state.test}</h1>
    </div>
  );
}
}
export default App;
