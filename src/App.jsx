import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import {FiSearch} from 'react-icons/fi'
import './App.css'
import './componentes/List.css/style.css'
import api from './componentes/services/api'

function App() {

  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});
  

  async function click(){
    
    
    if(input === ''){
      alert('Preencha alguma coisa')
      return;
    }
    try{
      const response = await api.get(`${input}.json`);
      setCep(response.data)
      setInput('');

    }catch{
      alert("Erro ao buscar");
      setInput('')

    }
    

  }

  return(
  <div className='container'>
    <h1 className='title'>Buscador CEP</h1>
    
    <div className='containerInput'>
      <input 
      type="text" 
      placeholder='13057-023'
      value={input}
      
      onChange={(e)=> setInput(e.target.value)}/>


      <button className='buttonSearch' onClick={click}>
        <FiSearch size={25}  />
        
      </button>
    </div>
  
    {Object.keys(cep).length > 0 && (
    <main className='main'>
        <h2>CEP: {cep.code}</h2>
        <span>{cep.address}</span>
        <span>{cep.district}</span>
        <span>{cep.state}</span>
        <span>{cep.city}</span>
    </main>
)}
   



  </div>
  );
}




export default App
