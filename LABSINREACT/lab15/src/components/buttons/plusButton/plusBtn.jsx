import React from 'react'

const PlusBtn = ({setCount}) => {

    
const increment = () => setCount((prevCount) => prevCount + 1);  
  return (
    <div>
      <button className='plus' onClick={increment}>+1</button>
    </div>
  )
}

export default PlusBtn
