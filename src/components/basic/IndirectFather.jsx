import React, { useState } from 'react';

import IndirectSon from './IndirectSon'

export default props => {
  const [course, setCourse] = useState('Desenvolvimento de Sistemas')
  const [student, setStudent] = useState('')

  function getStudent(name) {
    setStudent(name)
  }

  return (
    <div>
      <h3>Curso: {course}</h3>
      <h3>Aluno: {student}</h3>

      <p><IndirectSon whenClick={ getStudent } /></p>
    </div>
  )
}