import React, { Component } from 'react'

import Display from './Display'
import Buttons from './Buttons'
import StepForm from './StepForm'

import './counter.css'

class Counter extends Component {

  state = {
    number: this.props.initialNumber || 0,
    step: this.props.step || 5,
  }

  inc = () => {
    this.setState({
      number: this.state.number + this.state.step
    })
  }

  dec = () => {
    this.setState({
      number: this.state.number - this.state.step
    })
  }

  setStep = (newStep) => {
    this.setState({
      step: newStep
    })
  }

  render(){
    return(
      <div className="Counter">
        {/* Inserção apenas. */}
        <Display number={this.state.number} />

        {/* 
        Comunicação direta por meio da props "step". E outra indireta (a partir do Pai (Contador) por meio)
        da props "setStep" (do Filho (stepForm)) que recebeu a função "setStep" (tanto faz ter o mesmo nome)
        que por suas vez, passou o valor lido pelo input como parâmetro da função "setStep" (como newStep),
        assim alterando o estado do componente pai (passo do Contador).
        */}
        <StepForm step={this.state.step} setStep={this.setStep} />
        
        {/*
        Passar a as funções inc e dec em suas respectivas props poir meio de uma comunicação indireta, ou
        seja, quando o button (do componente Filho) é clicado ele alerta um estado do componente Pai por 
        meio da função que lhe foi passada.
        */}
        <Buttons setInc={this.inc} setDec={this.dec} />
      </div>
    )
  }
}

export default Counter