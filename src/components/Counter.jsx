import React from "react"

import propTypes from 'prop-types'

const Counter = (props)=> {
    const [count, setCount] = React.useState(0)
    const [errorMessage, setErrorMessage] = React.useState('')
    function decrement(){
      if(count > 0) {
        setCount (count - 1)
        setErrorMessage('')
      } else {
        setErrorMessage('Minimum number exceeded')
      }
  
    }
    function increment(){
      if(count < 10) {
        setCount (count + 1)
        setErrorMessage('')
      }else {
        setErrorMessage('Maximum number exceeded')
      }
    }
   
   const {onChangeNumber} =props
   React.useEffect (()=>{
    console.log('componentDidmount')
   }, [])
    
    React.useEffect(()=>{
        function changeNumber (num){
            props.onChangeNumber(num)
        }
    
       changeNumber(count, onChangeNumber)
    }, [count])
    return (
        <>
            <div className='text-xs text-red-500'>{errorMessage}</div>
            <div className="flex gap-8">  
            <button onClick={decrement} className="h-[50px] bg-[#48E0E4] w-[100px] rounded-[20px] text-black">-</button>
            <button onClick={increment} className="h-[50px] bg-[#48E0E4] w-[100px] rounded-[20px] text-black">+</button>
            </div>

        </>
    )
}
 Counter.propTypes = {
    onChangeNumber: propTypes.func
 }
 
 export default Counter