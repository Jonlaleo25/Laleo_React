import React, { Component } from 'react';
import Buscador from './componentes/Buscador';
//import logo from './logo.svg';
import './App.css';

function Laleo(props){
  return <h2>Laleo</h2>
}

function Laleo2(props){
return <h2>{props.title}></h2>
}


class App extends Component {

  state = {
    termino : ""
  }

  consultarApi = ()=>{
    const termino = this.state.termino;
    const url =`https://pixabay.com/api/?key={ KEY }&q=${termino}`
    //console.log(url);

    fetch(url)
    .then(respuesta => respuesta.json())
    .then(resultado => console.log(resultado.hits))
  }

  datosBusqueda = (termino) =>{
   this.setState({
     termino
   },()=>{
     this.consultarApi();
   })
  }

  render() {
    return (
      
      <div className="app container">
      <Laleo/>
      <Laleo2 title='Laleo' />
        <div className = "jumbotron">
         <p className="lead text-center">Buscador </p>
         <Buscador
         datosBusqueda={this.datosBusqueda}/>
        </div>
        {this.state.termino}
      </div>
      
      /*<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
           LALEO REACT JS
          </p>
          <h2>Esto es react JS Productions</h2>
        </header>
      </div>*/
    );
  }
}

export default App;
