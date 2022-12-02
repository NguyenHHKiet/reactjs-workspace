import React, { useCallback } from 'react'

const useCallback = () => {
    /*
    returns a memoized version of a callback that only changes when the dependencies change.
    */
    
    // handleRenderArea : a memoized version of updateSurfaceArea
    const handleRenderArea = useCallback(() => {
        updateSurfaceArea(size);
    }, [size]);
    // handleRenderArea updates when size changes value
  return (
    <div>useCallback</div>
  )
}

export default useCallback