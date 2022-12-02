import React, { useLayoutEffect } from 'react'
import useLocalStorage from './useLocalStorage'

// simple example to save user preferences regarding in the background color

const App2 = () => {

    const [bgColor, setBgColor] = useLocalStorage('bg-color', 'dark');

    useLayoutEffect(() => {
        if (bgColor === 'dark') {
            document.body.style.backgroundColor = '#000';
        } else if (bgColor === 'light') {
            document.body.style.backgroundColor = '#e8e8e8';
        } else {
            document.body.style.backgroundColor = '#fff';
        }
    }, [bgColor]);
    
    return (
    <div>
        <button type="submit" onClick={() => { bgColor === 'dark' ? setBgColor('dark') : setBgColor('light') }}>
            changeColor
        </button>
    </div>
  )
}

export default App2