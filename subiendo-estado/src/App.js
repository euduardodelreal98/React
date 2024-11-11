/*Compaertir el estado en distintos componentes */
/*ejemplo del cual necesitamos compartir el estado de 2 inputs para poder obtener
  el nombre completo de una persona
  Nota: no dejar que un componente padre controle el estado
  Levantar el estado de un componente: se va a realizar una pequeña refacrorizacion 
  de la clase input y lo vamos a subir es decir, del componente hijo de input lo vamos
  a pasar al componente padre de app
*/

/* 
  value={this.state.nombre}: se le pasa a lo componentes de Input el valor que tiene que
  imprimir.
  onChange={e => this.updateValues('nombre',e.target.value)}:evento el cual nos interesa
    obtener el valor e.target.value que es el valor que
    tiene el campo en ese momento. Primero se le pasa cual es la propiedad del objeto
    que vamos a actualizar y su segundo argumento va a ser e.target.value
*/

import {Component} from 'react'

class Input extends Component{


  render(){
    return(
      <input
        value={this.props.value}
        onChange={this.props.onChange}  
      />
    )
  }

}

/*Clase para renderizar nombre completo */
class App extends Component{
  state = {
    nombre : '',
    apellido : '',
  }

  /*prop y value con propiedades dinamicas es decir que si le pasamos un string 
   lo que hara es actualizar el valor de nombre pero del state */
  updateValues = (prop,value) => {
    this.setState({[prop]: value})
  }

  render() {
    return (
      <p>
        Nombre completo:{`${this.state.nombre} ${this.state.apellido}`}
        <Input
          value={this.state.nombre}
          onChange={e => this.updateValues('nombre',e.target.value)}
        />
        <Input
          value={this.state.apellido}
          onChange={e => this.updateValues('apellido',e.target.value)}       
        />
      </p>
    )
  }
}

export default App;