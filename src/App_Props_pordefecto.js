import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Title extends Component{
    render(){
    return <h1>{this.props.text}</h1>
    }
}

// Default props

Title.defaultProps = {
    text: 'Titulo por defecto'
}

class App extends Component {
  render() {
    return (
        <div className="App">
        <Title text="Banner responsive"/>
        </div>
    );
  }
}

export default App;
