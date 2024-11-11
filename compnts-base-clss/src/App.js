  /*actualiza el estado de nuestro componente
  El metodo de render() se ejecuta siempre en 2 condiciones 
    -cuando llamemos setSate que es para el cambio de nuestro estado en los componentes
    -cuando el metodo render del componente padre tambien se haya llamado */

import { Component } from 'react'

class Button extends Component {
  /*El constructor es la instancia para que nosotros podamos setear un estado de los
    componentes en react */
  state = {}
  constructor(props){
    super(props)
    console.log('Constructor',props)
  }

  render(){
    console.log('ejecutando metodo render de button');
    return(
      <button onClick={() => this.setState({prop: 1 })}>
        Enviar
      </button>
    )
  }
  /*metodo de component didMount
   este metodo no va a recibir nungun argumento y se utiliza para cuando
   tenemos que llamar a setState y poder actualizar el estado de nuestro componente
   nos sirve para evaluar algo dentro de nuestro DOM por ejemplo si queremos mostrae
   un modal o cuando queremos inicar llamdos ajax para traer datos de una API */
  componentDidMount(){
    console.log('this.componentDidMount')
  }

  /*el metodo componentDidUpdate recibe 2 argumentos 1.Las propiedades anteriores
  2.El estado anterior
  este metodo no se ejecuta la primera vez, unicamente se ejecuta cuando actualizamos
  el boton de component*/
  componentDidUpdate(prevProps, prevState){
    console.log('componentDidUpdate', prevProps,prevState)
  }

  /*metodo de component WillUnmount: este metodo nos sirve para poder desmontar
  un componente nota: no es lo mismo desmontar un componente que esconderlo o hacerle hide
  no recibe argumentos */
  componentWillUnmount(){
    console.log('desmontando componente:', this.props, this.state)
  }

}

class App extends Component {
  /* definicion de mi estado del componente */
  state = {
    valor : 3
  }
  render() {
    console.log(this.state)
    return(
      <div>
        <p>Hola a todos esto es una nueva app!</p>
        {
          this.state.valor === 3
          ? <Button chanchito = 'feliz'/>
          :null
        }
        <button className={`${this.state.valor}`} onClick={() => this.setState({valor : 2})}>
          Enviar en app!
        </button>
      </div>
    )
  }
}

export default App;
