import React from 'react';

import './card.css';

export default (props) => {

  const cardStyle = {
    backgroundColor: props.color,
    borderColor: props.color
  }

  return(
    <div className='Card' style={cardStyle}>
      <div className='Title'><h2>{props.title}</h2></div>
      <div className='Content'>
        {props.children}
      </div>
    </div>
  )
}