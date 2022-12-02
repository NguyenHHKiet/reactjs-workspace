import React,{useState} from 'react'

export const useState = () => {
    // create and update state values
    
    /*
    count : holds the state value
    setCount : used to update the state value
    useState() : creates the state resources and set the initial value to 0
    */ 
    const [count, setCount] = useState(0);

    // changes the count value to 1
    setCount(1);
    return (
        <div>{count}</div>
    )
}
