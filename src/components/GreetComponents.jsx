import { useState } from "react"

const GreetComponents= function(){
    
    const [nome  , setNome]= useState('');
    const [isButtonClicked, setIsButtonClicked]=useState(false)
    return(
    <>
        <input
            type="text" value={nome} onChange={e=>{
            setNome(e.target.value) 
        }}/>
        <button onClick={() =>{
            setIsButtonClicked(!isButtonClicked);
        }}>
            Saluta 
        </button>
        <p>{isButtonClicked && `ciao ${nome}` }</p>
    </>
    )
}

export default GreetComponents