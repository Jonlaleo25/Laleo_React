/** 
 * Extenciones creacr componente es imrc
 * Extenciones de cc
 * 
*/
import React, { Component } from 'react';

class Buscador extends Component {

    busquedaRef = React.createRef();

    obtenerDatos = (e) => {
        e.preventDefault();
        // se toma el valor del input
        const termino =  this.busquedaRef.current.value
        // se envia al componenet principal
        this.props.datosBusqueda(termino);
        
    }
  
    render() { 
        return ( 

            <form onSubmit={this.obtenerDatos}>
                <div className="row">
              
                <div className="form-group col-md-8">
                <input ref={this.busquedaRef} type="text" id="buscar" className="form-control form-control-lg" placeholder="Buscador"/>
                
                </div>
                <div className="form-group col-md-4">
                <input type="submit" className="btn btn-lg btn-danger btn-block" placeholder="Buscador"/>
                
                </div>
                </div>
            </form>
         );
    }
}

export default Buscador;

