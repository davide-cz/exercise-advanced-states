import { useState } from "react";

const UserForm= ()=> {
    const [person , setPerson ]=useState({
        email:'',
        color:'',
        sex:''
    });
    //form scelta colore
    const [selectedKey,setSelectedKey]=useState('verde')
    //scelta sex
    const [selectedSex,setSelectedSex]=useState('femmina')

    return (
        <form>
            <p>e-mail
                <input type="email" value={person.email} 
                    onChange={e=>setPerson({
                        ...person, email:e.target.value
                    })
                } />
            </p>
            
            <p>
                Password<input type="text"/>
            </p>
            <p>
                Qual è il tuo colore preferito?
                <select name="" id="" value={selectedKey} onChange={e=>{
                    setSelectedKey(e.target.value)
                    setPerson({...person, color:e.target.value})
                }}>
                        <option value="blu" defaultChecked>blu</option>
                        <option value="verde">verde</option>
                        <option value="rosso">rosso</option>
                </select>
            </p>
            <p>sei un maschio o una femmina?
                    maschio
                    <input onChange={e=>{
                         setSelectedSex(e.target.checked)
                         setPerson({...person,sex:'maschio'})
                    }}
                    
                        type="radio" 
                        name="sex"
                        value='maschio' 
                    />
                    femmina
                    <input onChange={e=>{
                         setSelectedSex(e.target.checked)
                         setPerson({...person,sex:'femmina'})
                    }}
                        type="radio" 
                        name='sex' 
                        value='femmina'
                    />
            </p>
            <p>{person.email} il tuo colore preferito è {person.color} e sei {person.sex} </p>
        </form>
    )
}
export default UserForm