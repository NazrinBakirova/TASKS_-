import React from 'react'

const ResetBtn = ( {setCount}) => {

    const reset = () => setCount(0);  

  return (
    <div>
      <button className='reset' onClick={reset}>Reset</button>
    </div>
  )
}

export default ResetBtn
