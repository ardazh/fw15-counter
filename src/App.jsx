import React from 'react'

import Counter from './components/Counter'

function App() {
  const [num, setNum] = React.useState(0)
 
  return (
    <>
      <div className="flex flex-col h-screen justify-center items-center gap-4" >
      <div className="bg-orange-500 w-[100px] h-[50px] flex justify-center items-center text-white rounded-[20px]">
      {num}
      </div>
     <Counter onChangeNumber={setNum}/>
      </div>
    
    </>
  )
}

export default App