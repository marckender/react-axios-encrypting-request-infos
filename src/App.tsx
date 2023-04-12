import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import api from './services/api'

function App() {
  const [user, setUser] = useState("")
  const [pass, setPass] = useState("")

  const testCrypting = async () =>{
    await api.post("pokemon/ditto", {
      user: user,
      pass: pass
    })
  }

  return (
    <div className="App">
    
      <h1>React + Axios+ typescript + cripto-js --- CRYPTING TEST</h1>
      <label htmlFor="">user</label>
      <input type="text" value={user} onChange={(e)=> setUser(e.target.value)}/> <br /><br />

      <label htmlFor="">senha</label>
      <input type="text" value={pass} onChange={(e)=> setPass(e.target.value)}/>
      <div className="card">
        <button onClick={() => testCrypting()}>
          confirm
        </button>
      </div>
    </div>
     
  )
}

export default App
