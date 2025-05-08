import React, { useEffect, useState } from 'react'
import ProgressBar from './ProgressBar'

function ProgressBarMain() {

const [progress ,setProgress] = useState(0);

useEffect(()=>{
const time = setInterval(()=>{
   if(progress<100){
    setProgress((p)=> p + 1)
   }
},20);

return () => clearInterval(time);

},[progress])


  return (
  <>
  <ProgressBar progress={progress} color={'lightgreen'}></ProgressBar>
  </>
  )
}

export default ProgressBarMain