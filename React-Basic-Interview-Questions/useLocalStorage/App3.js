import React from 'react'
import useLocalStorage from './useLocalStorage'

// manage the counter in a easy way with persistent value even after page reload

const App3 = () => {

    const [count, setCount] = useLocalStorage('count', 0);

    const handleReloadPage = () => {
        window.location.reload();
    }

    return (
        <div>
            <h5>{count}</h5>
            <button type="submit" onClick={() => setCount(count + 1)}>+</button>
            <button type="submit" onClick={() => setCount(count - 1)}>-</button>
            <br/>
            <button type="submit" onClick={handleReloadPage}>reload</button>
        </div>
  )
}

export default App3