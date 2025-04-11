import React from 'react';

const AutoBtn = ({ setAutoCounting }) => {
 return  <button onClick={()=>setAutoCounting((prev)=>!prev)}>start-end</button>
};

export default AutoBtn;
