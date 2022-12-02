import React, { useContext } from 'react'

const useContext = () => {
    /*
    Accepts a context object that's created using React.createContext,
    and returns the current value that context.
    */
    
    // value : current context value
    // ThemeContext: context object
    const value = useContext(ThemeContext);

  return (
    <div>useContext</div>
  )
}

export default useContext