import React from 'react'
import { useState } from 'react'

function Faq({faq, index}) {

    const [isopen, setopen] = useState(false);


function clickhandler(){
    setopen(!isopen)
}

  return (
<>
<div className="container">
    <div className="que" onClick={clickhandler}>
        <button>{isopen ? '-' : '+'}</button>
        <h3>{faq.question}</h3>
    </div>
{isopen &&
    <div className="ans">
        <p>{faq.answer}</p>
    </div>
}

</div>

<style jsx>{`
.que{
display:flex;
gap :50px;
align-items:center;
}
button{
height:50px;
}
.container {
          margin-bottom: 16px;
          border: 1px solid #ccc;
          padding-right: 200px;
                    padding-left: 50px;

          border-radius: 8px;
        }

        .ans {
          padding-left: 20px;
          color: #333;
        }
`}
    
</style>
</>

  )
  
}


export default Faq