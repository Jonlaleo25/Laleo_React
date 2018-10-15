import React, { Component } from 'react';
//
import logo from './logo.svg';
import img1 from './img/GRABADOS.png';
import img2 from './img/001.png';
import img3 from './img/newbanner1.png';
import img4 from './img/newbanner2.png';
import './App.css';
import Slider from "react-slick";

class SimpleSlider extends React.Component{
    render(){
        var settings = {
            dots : true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return(
            <Slider {...settings}>
                    <div>
                    <h3><img src={img1} className="img_" alt="logo" /></h3>
                    </div>
                    <div>
                    <h3><img src={img2} className="img_" alt="logo" /></h3>
                    </div>
                    <div>
                    <h3><img src={img3} className="img_" alt="logo" /></h3>
                    </div>
                    <div>
                    <h3><img src={img4} className="img_" alt="logo" /></h3>
                    </div>

            </Slider>
        ) 
    }
}

class Contador extends Component{

    // Secrea un construtor
    constructor(props){
        super(props)
        //console.log(this.props.contadorInicial)
        // se inicia el estado
        this.state = {contador: this.props.contadorInicial}
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

Contador.defaultProps = {
    contadorInicial : 1
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
    <SimpleSlider></SimpleSlider>
      <p>Componente de estado</p>
      <Contador contadorInicial= {100}></Contador>
      

    </div>
    );
  }
}

export default App;
