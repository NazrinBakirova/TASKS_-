import React from 'react'

const MinusBtn = ( {setCount}) => {

    const decrement = () => setCount((prevCount) => prevCount - 1);  
  return (
    <div>
      <button className='minus' onClick={decrement}>-1</button>
    </div>
  )
}

export default MinusBtn
