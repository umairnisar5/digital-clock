import React, { useState } from 'react';

const App = () => {
 
  let Time = new Date().toLocaleTimeString();

  const [ctime, setCtime] = useState(Time);


return (
 <>
 <h1> {ctime} </h1>


 </>
)
}

export default App;
