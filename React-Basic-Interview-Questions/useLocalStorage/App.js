import React from 'react'
import useLocalStorage from './useLocalStorage'

// set a new message and token
const App = () => {

    const [message, setMessage] = useLocalStorage('message', 'Hello world');
    const [token, setToken] = useLocalStorage('token', 123);

    const handleSetDefault = () => { 
        setMessage('Hello world');
        setToken(123);
    }
  return (
      <div>
          <h5>{message}</h5>
          <p>{token}</p>
          <button type="submit" onClick={()=> setMessage('bye bye')}>message</button>
          <button type="submit" onClick={()=> setToken(798)}>token</button>
          <button type="submit" onClick={handleSetDefault}>default</button>
    </div>
  )
}

export default App