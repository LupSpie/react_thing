import React, {Component} from 'react';
import './App.css'

import IndirectFather from './components/basic/IndirectFather'
import State from './components/basic/State'
import NestedClone from './components/basic/clones/FamilyClone'
import NestedMemberClone from './components/basic/clones/FamilyMemberClone'
import Nested from './components/basic/Family'
import Card from './components/layout/Card'
import Properties from './components/basic/Properties'
import WorldHello from './components/basic/HelloWorld'
class App extends Component {
  render() {
    return(
      <div className="App">
        <h1>Exemplos React</h1>

        <div className="Cards">

          <Card title="Comunicação Indireta (de filho para pai)" color="#f7673b">
            <IndirectFather />
          </Card>

          <Card title="Estado" color="#ffb400">
            <State />
          </Card>

          <Card title="Componentes aninhados (CloneElement)" color="#82212e">
            <NestedClone surname="Simpson">
              <NestedMemberClone name="Homer Jay" />
              <NestedMemberClone name="Marjorie" />
              <NestedMemberClone name="Bartholomew JoJo" />
              <NestedMemberClone name="Lisa Marie" />
              <NestedMemberClone name="Margareth" />
            </NestedClone>
          </Card>

          <Card title="Componentes aninhados" color="#d1495b">
            <Nested surname="Simpson" />
          </Card>

          <Card title="Propriedades" color="#91cb3e">
            <Properties name="Homer" surname="Jay Simpson" age={38}/>
          </Card>

          <Card title="Olá Mundo!" color="#226ce0">
            <WorldHello />
          </Card>

        </div>
      </div>
    )
  }
}

export default App;
