import React, {Component} from 'react'
import './App.css'

import Counter from './components/Counter'
import Card from './components/layout/Card'
class App extends Component {
  render() {
    return(
      <div className="App">
        <h1>Contador</h1>

        <div className="Cards">
          <Card title="Contador componentizado" color="#0d3024">
            <Counter initialNumber={10} />
          </Card>
        </div>
      </div>
    )
  }
}

export default App;
