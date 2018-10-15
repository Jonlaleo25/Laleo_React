import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class Contador extends Component{

    // Secrea un construtor
    constructor(){
        super()
        // se inicia el estado
        this.state = {contador:0}
        setInterval(() => {
            this.setState({ contador : this.state.contador + 1})
        }, 1000)
    }

    render(){
        //const contador = 0;
    //return <span>{this.state.contador}</span>
    return <ContadorNumero numero = { this.state.contador} />
    }
}

class ContadorNumero extends Component{

    render(){
        console.log('ContadorNumero render()')
        return <span>{this.props.numero}</span>
    }
}



class App extends Component {
  render() {
    return (
    <div className="App">
      <p>Componente de estado</p>
      <Contador></Contador>
    </div>
    );
  }
}

export default App;
