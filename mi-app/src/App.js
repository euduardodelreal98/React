// en react cuando estamos trabajando con listas que vamos a imprimir se tiene que indicar
// un valor unico para identificar la fila que queremos renderizar 
import Button from './Button.js'

const arr = [
  'Jose Eduardo',
  'Mariana',
  'Juan Carlos',
]

const App = () => {
  const miVariable = false

  if(miVariable)
  {
    return <p>Mi variable dieo true!</p>
  }
  return(
    <div>
      <h1>Hola a todos!</h1>

      /*el metodo map me va a regresar un nuevo arreglo */
      {arr.map(el => <p>{el}</p>)}
      <Button onClick={(e) => console.log('clickead',e)}>
        Enviar
      </Button>
    </div>
  )
} 

export default App