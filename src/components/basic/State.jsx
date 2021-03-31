import React, { useState } from 'react';

export default props => {
  const [course, setCourse] = useState('Desenvolvimento de Sistemas')
  const [student, setStudent] = useState('Bartholomew JoJo Simpson')

  return (
    <div>
      <h3>Curso: {course}</h3>
      <h3>Aluno: {student}</h3>
    </div>
  )
}