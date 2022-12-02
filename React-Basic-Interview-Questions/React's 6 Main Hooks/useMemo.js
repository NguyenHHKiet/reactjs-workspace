import React, { useMemo } from 'react'

const useMemo = () => {
    /*
    returns a memoized value which only gets recalculated when
    the defined dependencies are change
    */
    
    // area: holds the cached value returned by calcSurfaceArea()
    const area = useMemo(() => {
        return calcSurfaceArea();
    }, [size]);
    // size: area updates every time size changes
    
  return (
    <div>useMemo</div>
  )
}

export default useMemo