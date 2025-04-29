import React from 'react'

import '../App.css'

function Count() {

    const [count, setCount] = useState(0)

    const countHandler = (e)=>{
      e.preventDefault()
      if (count>=10){
       alert("you cant increse now ")
       setCount(0)
      }
      else {
        setCount(count+1)
      }
     
    }
  return (
    <>
    <div className='container'>
      <h1>{count}</h1>
      <button onClick={countHandler}>Add Count</button>
    </div>
    </>
  )
}

export default Count
