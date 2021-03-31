import React, { useState } from 'react';

export default props => {
  const [name, setName] = useState('Bartholomew JoJo Simpson')

  return(
    <div>
      <button onClick={() =>{
        props.whenClick(name)
      }}>
        Fornecer informações do Aluno
      </button>
    </div>
  )
}