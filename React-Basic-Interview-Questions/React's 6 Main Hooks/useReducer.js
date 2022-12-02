import React, { useReducer } from 'react'

const useReducer = () => {
    /*
    similar to useState but also lets you use your own update state logic
    */

    // state: contains state value
    // dispatch: a function update state value
    const [state, dispatch] = useReducer(updateCount, { count: 0 });

    // updateCount : a callback that takes the current state value and action object and returns the new state
    const updateCount = (state, action) => {
        switch (action.type) {
            case 'increment':
                return { count: state.count + 1 };
            case 'decrement':
                return { count: state.count - 1 };
            default:
                throw new Error();
        }
    }

    // dispatch: calls updateCount
    // parameters: the action object
    dispatch({ type: 'increment' })
  return (
    <div>useReducer</div>
  )
}

export default useReducer   