import { useState } from 'react'

const ListaInvitati=()=>{
    const [listaInviti , setListaInviti]=useState([]);
    const [personaInvitata,setPersonaInvitata]=useState('')


    return(
        <>
            <h1>lista invitati</h1>
            <input type="text" value={personaInvitata} onChange={e=>{
                setPersonaInvitata(e.target.value)
            }}/>
            <button onClick={()=>{
               setListaInviti(
                [...listaInviti , personaInvitata]
                )
                setPersonaInvitata('')
            }}>invita</button>
            <ul>
                {listaInviti.map((invitato,i) =>
                    <li key={`invitato${i}`}>
                        {invitato}
                        <button onClick={()=>{
                            const listaAggiornata=listaInviti.filter((elem , ind)=>ind!==i)
                            setListaInviti(listaAggiornata)}}
                        >Rimuovi</button>
                    </li>)}
            </ul>
        </>
    )
}




export default ListaInvitati