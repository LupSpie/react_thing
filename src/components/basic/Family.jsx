import React from 'react';

import FamilyMember from './FamilyMember';

export default props => {
  return (
    <div>
      <FamilyMember name= "Homer Jay" surname= {props.surname} /> 
      <FamilyMember name= "Marjorie" surname= {props.surname} /> 
      <FamilyMember name= "Bartholomew JoJo" surname= {props.surname} /> 
      <FamilyMember name= "Lisa Marie" surname= {props.surname} /> 
      <FamilyMember name= "Margareth" {...props} /> 
    </div>
  )
}