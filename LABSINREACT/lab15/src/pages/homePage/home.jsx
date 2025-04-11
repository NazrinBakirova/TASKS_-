import React, { useEffect, useState } from 'react'
import ResetBtn from '../../components/buttons/resetButton/resetBtn'
import PlusBtn from '../../components/buttons/plusButton/plusBtn'
import MinusBtn from '../../components/buttons/minusButton/minusBtn'
import AutoBtn from '../../components/buttons/autoButton/autoBtn'

const Home = () => {

const [count , setCount]= useState(0)
const [autoCounting,setAutoCounting]= useState(false)

  useEffect(()=>{
 let interval = null
  if(!autoCounting )return;

 interval = setInterval(()=>{
  setCount((count)=>count+1);
},1000);

return ()=> 
  clearInterval(interval);


  },[autoCounting])

  return (
    <div>
      <h2>{count}</h2>
<>
<MinusBtn setCount={setCount}/>
<ResetBtn setCount={setCount}/>
<PlusBtn  setCount={setCount}/>
<AutoBtn setAutoCounting={setAutoCounting} />

</>

    </div>
  )
}

export default Home
