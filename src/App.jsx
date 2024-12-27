import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App  = () => {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState(0);

  const somar = () => {
    setResultado(Number(numero1) + Number(numero2));
  };

  const subtrair = () => {
    setResultado(Number(numero1) - Number(numero2));
  };

  const multiplicar = () => {
    setResultado(Number(numero1) * Number(numero2));
  };

  const dividir = () => {
   if (Number(numero2) !== 0){
      setResultado(Number(numero1) / Number(numero2));
   } else {
    alert("Divisão por zero não é permitido")
   }
  };

  return (
    <div>
      <h1>Calculadora</h1>
      <label>Primeiro número
      <input 
      type="number" 
      value={numero1}
      onChange={(e) =>setNumero1(e.target.value)}
      />
      </label>
      
      <label>Segundo número
      <input 
      type="number" 
      value={numero2}
      onChange={(e) => setNumero2(e.target.value)}
      />
      </label>
      
      <button onClick={somar}>+</button>
      <button onClick={subtrair}>-</button>
      <button onClick={multiplicar}>*</button>
      <button onClick={dividir}>/</button>
      <p>Resultado: {resultado}</p>
    </div>
  )
}
   

export default App
