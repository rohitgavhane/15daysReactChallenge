import React from 'react'

function ProgressBar({progress, color}) {
  const styleObject = {
    width : `${progress}%`,
    backgroundColor: color || 'lightgreen',
    height: 30, 
    borderRadius: 20
  }

  return (
    <>

    <div className="container" style={styles.container}>

        <div className="progressBar" style={styles.progressBar}>
            <div style={styleObject}>
                {`${progress}%`}
            </div>
        </div>
    </div>
    
    </>
  )
}

const styles = {
    container: {
        width:'400px',
        display:'flex',
        justifyContent: 'center',
        alignItems:'center',

        marginTop:'20%',
        marginLeft:'40%',
    },

    progressBar:{
        width:'200%',
     backgroundColor:'lightgrey',
     borderRadius:'20px',
    
     marginLeft:'2%',
 
    }

}

export default ProgressBar