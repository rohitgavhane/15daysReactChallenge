import React, { use, useEffect, useState } from 'react'


function EMIcalculator() {

    const[principle, setPrinciple] = useState(0);
    const[interest, setInterest] = useState(0);
    const[Years, setyears] = useState(0);
    const[emi, setEmi]= useState(0);

const changeHandler =(e)=>{
    const id = e.target.id;
    const value = parseInt(e.target.value);

    if(id == "principle"){
        setPrinciple(value)
    }else if(id == 'interest'){
        setInterest(value);
    }
    else if(id == 'loan'){
        setyears(value);
    }
}

// P(r(1+r)^n/((1+r)^n)-1))

const calculation = ()=>{
 let r = interest;
if(principle && r && Years){
    r = r / 12 / 100 //to convert in month
    const calcPow = Math.pow(1+r, Years * 12)
    const amount = principle *((r* calcPow)/ (calcPow-1));
    setEmi(Math.round(amount));
}
}

useEffect(()=>{
calculation();
},[principle,interest,Years])



  return (
<>
<div className="container" style={styles.container}>
  <div className="heading" style={styles.heading}>
    <h2>EMI Calculator</h2>
  </div>
  <div className="content" style={styles.content}>
    <h4>Principle</h4>
    <input type="number" id="principle" onChange={changeHandler} style={styles.input} />

    <h4>Interest Rate</h4>
    <input type="number" id="interest" onChange={changeHandler} style={styles.input} />

    <h4>Years</h4>
    <input type="number" id="loan" onChange={changeHandler} style={styles.input} />
  </div>

  <h3 style={styles.result}>Your monthly mortage payment would be {emi}</h3>
</div>

</>
  )
}

const styles = {
    container: {
      width: '400px',
      margin: '50px auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f9f9f9',
    },
    heading: {
      textAlign: 'center',
      marginBottom: '20px',
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
    },
    input: {
      padding: '10px',
      fontSize: '16px',
      borderRadius: '5px',
      border: '1px solid #aaa',
    },
    result: {
      marginTop: '20px',
      textAlign: 'center',
      fontSize: '18px',
      fontWeight: 'bold',
    },
  };
  

export default EMIcalculator

