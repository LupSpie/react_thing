import React from 'react'

export default props => {
   return(
      <h2>
         <label htmlFor="stepInput">Passo:  </label>
         <input
            id="stepInput"
            type="number"
            value={props.step}
            // (event) é o evento da tag (inpput nesse caso)
            // o sinal de + converte o value para number
            onChange={event => props.setStep(+event.target.value)}
         />
      </h2>
   )
}