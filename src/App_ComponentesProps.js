import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Creacion de componentes



// Componenete con funsion simple
function  Hello(props){
  return <h1>Componente</h1>
}


function  Hello2(props){
  return <h2>{props.title}</h2>
}
// componenete con funsion igual flecha
const Hello3 =(props) => <h3>{props.title}</h3>





// componenete con fusion de clase
class Hello4 extends Component{
  render(){
      return <h2>{this.props.title}</h2>
  }
}
// COmponente con clase
class Text extends Component{
  render(){

     const{
          boolean2,
          arrayOfNumbers2,
          objectWithInfo,
          title} = this.props

      const textoSegundobool = boolean2 ? 'Cierto' : 'Falso'
      const arrayOfNumbers = arrayOfNumbers2.map(n =>  n *2)
      
      return(
          <div>
            {title}
             <h2>{this.props.text}</h2>
             <h2>{this.props.number}</h2>
             <p>{JSON.stringify(this.props.boolean)}</p>
             <p>{textoSegundobool}</p>
             <p>{this.props.arrayOfNumbers.join('-')}</p>
             <p>{arrayOfNumbers2.join('-')}</p>
             <p>{this.props.objeto.key}</p>
          </div>
      )
       
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
          
      <img src={logo} className="App-logo" alt="logo" />
        
        <Hello/>
        <Hello2 title='Hello from props' />
        <Hello3 title="Otro componente"></Hello3>
   
        <Hello4 title="Componente con clase"></Hello4>
        <Text   arrayOfNumbers={[1,2,25,58]}
                arrayOfNumbers2={[1,2,25,58]}
                objeto = {{key:"value On", key2 :"value OFF"}}
                number={18} 
                text="Componente 4" 
                boolean={true}  
                boolean2
                >
       </Text>
       
  </div>
      /*<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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
        </header>
      </div>*/
    );
  }
}

export default App;
