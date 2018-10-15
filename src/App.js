import React, { Component } from 'react';
//
import logo from './logo.svg';
import img1 from './img/GRABADOS.png';
import img2 from './img/001.png';
import img3 from './img/newbanner1.png';
import img4 from './img/newbanner2.png';
import './App.css';
import Slider from "react-slick";
import './menu1.css';



class Card extends Component{
    render(){
        return(
            <ul className="men">
              <li className="li"><a href="#">Inicio</a></li>
              <li className="li"><a href="#">Tendencias one</a></li>
              <li className="li"><a href="#">Tendencias two</a></li>
              <li className="li"><a href="#">tendencias three</a></li>
              <li className="li"><a href="#">tendencias four</a></li>
            </ul>
        )
    }
}


class SimpleSlider extends React.Component{
    render(){
        const settings = {
            dots : true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
     

        return(
            <Slider {...settings}>
                  
                   <div >
                        <img src={img1} className="img_" alt="logo" />
                   </div>
                        <div>
                        <img src={img2} className="img_" alt="logo" />
                        </div>
                        <div>
                        <img src={img3} className="img_" alt="logo" />
                        </div>
                        <div>
                        <img src={img4} className="img_" alt="logo" />
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
    <div className="App" >
    <Card></Card>
    <div class="slider_">
      <SimpleSlider></SimpleSlider>

    </div>
    
      <br></br>
      <p>Componente de estado</p>
      <Contador contadorInicial= {100}></Contador>
    </div>
    );
  }
}

export default App;
