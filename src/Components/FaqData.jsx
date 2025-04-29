import React from 'react'
import Faq from './Faq';

function FaqData() {

    const data = [
        {
          question: "What is React?",
          answer: "React is a JavaScript library for building user interfaces.",
        },
        {
          question: "How do I use hooks?",
          answer: "Hooks let you use state and other React features without writing a class.",
        },
     
      ];
  return (

<>
{data.map((faq)=>{
  return  <Faq  faq={faq}></Faq>
})}
</>
  
  )
}

export default FaqData