import Exercicio1 from "./Exercicio1";
import Exercicio2 from "./Exercicio2";
export default function App()
{
  return (
    <div>
      <h1>Exercício 1</h1>
      <Exercicio1 numero={5}/>
      <Exercicio1 numero={10}/>
      <hr></hr>
      <h1>Exercício 2</h1>
      <Exercicio2 temp={40}/>
      <Exercicio2 temp={200}/>
      <hr></hr>
      <h1>Exercício 3</h1>
    </div>
  )
  
}
