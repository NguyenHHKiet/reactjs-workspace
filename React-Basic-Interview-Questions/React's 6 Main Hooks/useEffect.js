import React, { useEffect } from 'react'

const useEffect = () => {
    /*
    Used to run side effects in the component such as fetching data
    and adding listeners.
    */
    
    useEffect(() => {
        addEventListener(); // runs after the initial render
        return () => { removeEventListener() }; // runs just before the component unmounts
    })

    useEffect(() => {
        fetchUserInfo(userID); // runs after the first render and every time userID updates
    }, [userID]);

  return (
    <div>useEffect</div>
  )
}

export default useEffect