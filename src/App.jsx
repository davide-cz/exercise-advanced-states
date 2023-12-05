import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GreetComponents from './components/GreetComponents';
import UserForm from './components/UserForm';
import ListaInvitati from './components/ListaInvitati';

function App() {
  const  [username , setUsername] =useState('');

  
  return (
  
  <>
    {/* <input 
    type='text'
    value={username}
    onChange={e=>setUsername(e.target.value)} />
    <p>{username}</p>
 */}
    <GreetComponents/>
    <UserForm/>
    <ListaInvitati/>
  </>
  )
}

export default App
