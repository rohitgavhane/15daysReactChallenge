import React, { useState } from 'react'
import "../App.css"
function Task1() {
const [edit ,setedit] = useState()

    const student = [
        { id: 1, name: "Rohit", age: 20, hobby: "Cricket" },
        { id: 2, name: "Yash", age: 21, hobby: "Photography" },
        { id: 3, name: "Vedant", age: 19, hobby: "Gaming" },
      ];

const changeHandler = ()=>{
setedit(student)
}
  return (
   <>
   <div className="container">
    <div className="card mb-4">
    <ul className="list-unstyled">
          {student.map((student) => (
            <li key={student.id} className="mb-3 p-2 border rounded">
              <strong>Name:</strong> {student.name} <br />
              <strong>Age:</strong> {student.age} <br />
              <strong>Hobby:</strong> {student.hobby}
            </li>
          ))}
        </ul>

        <button className='btn btn-primary ' onClick={changeHandler}>Edit</button>

    </div>
   </div>
   </>
  )
}

export default Task1