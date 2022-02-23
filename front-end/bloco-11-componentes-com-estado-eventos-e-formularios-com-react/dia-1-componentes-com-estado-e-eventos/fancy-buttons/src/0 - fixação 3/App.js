import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      numeroDeCliques0: 0,
      numeroDeCliques1: 0,
      numeroDeCliques2: 0,
    }
    console.log(`Clicou! no "0" nenhuma vez; \nClicou! no "1" nenhuma vez; \nClicou! no "2" nenhuma vez;`)
    this.handleClick0 = this.handleClick0.bind(this)
    this.handleClick1 = this.handleClick1.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
  }

  handleClick0() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques0: estadoAnterior.numeroDeCliques0 + 1,      
    }))
    console.log(`Clicou! no "0" ${this.state.numeroDeCliques0 + 1} vezes`)
  }

  handleClick1() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques1: estadoAnterior.numeroDeCliques1 + 1,      
    }))
    console.log(`Clicou! no "1" ${this.state.numeroDeCliques1 + 1} vezes`)
  }

  handleClick2() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques2: estadoAnterior.numeroDeCliques2 + 1,      
    }))
    console.log(`Clicou! no "2" ${this.state.numeroDeCliques2 + 1} vezes`)
  }

  render() {
    return (
      <div>
        <button onClick={ this.handleClick0 } >Botão0 - { this.state.numeroDeCliques0}</button>
        <button onClick={ this.handleClick1 } >Botão1 - { this.state.numeroDeCliques1}</button>
        <button onClick={ this.handleClick2 } >Botão2 - { this.state.numeroDeCliques2}</button>
      </div>
    );
  }
}

export default App;
