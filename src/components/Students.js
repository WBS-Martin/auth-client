import React, { useState, useEffect } from 'react'

const Students = () => {
  const [students, setStudents] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/students')
      .then((res) => res.json())
      .then((data) => setStudents(data))
  }, [])

  return (
    <div>
      <h1>Public Access Route</h1>
      <ul>
        {students.length > 0 &&
          students.map((student) => <li key={student.name}>{student.name}</li>)}
      </ul>
    </div>
  )
}

export default Students
