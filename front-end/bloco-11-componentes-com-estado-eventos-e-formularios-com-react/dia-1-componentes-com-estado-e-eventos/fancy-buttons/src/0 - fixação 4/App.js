import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      numeroDeCliques0: 0,
      numeroDeCliques1: 0,
      numeroDeCliques2: 0,
    }
    console.log(`Clicou! no "0" nenhuma vez e sua cor é "verde"; \nClicou! no "1" nenhuma vez e sua cor é "verde"; \nClicou! no "2" nenhuma vez e sua cor é "verde";`)
    this.handleClick0 = this.handleClick0.bind(this)
    this.handleClick1 = this.handleClick1.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
  }

  handleClick0() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques0: estadoAnterior.numeroDeCliques0 + 1,      
    }))
    console.log(`Clicou! no "0" ${this.state.numeroDeCliques0 + 1} vezes e sua cor é "${this.colorButton(this.state.numeroDeCliques0 + 1)}"`)
  }

  handleClick1() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques1: estadoAnterior.numeroDeCliques1 + 1,      
    }))
    console.log(`Clicou! no "1" ${this.state.numeroDeCliques1 + 1} vezes e sua cor é "${this.colorButton(this.state.numeroDeCliques1 + 1)}"`)
  }

  handleClick2() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques2: estadoAnterior.numeroDeCliques2 + 1,      
    }))
    console.log(`Clicou! no "2" ${this.state.numeroDeCliques2 + 1} vezes e sua cor é "${this.colorButton(this.state.numeroDeCliques2 + 1)}"`)
  }

  colorButton(numeroDeCliques) {
    return (numeroDeCliques % 2 === 0) ? 'green' : 'white';
  }

  render() {
    const { numeroDeCliques0, numeroDeCliques1, numeroDeCliques2 } = this.state
    return (
      <div>
          <button
            onClick={ this.handleClick0 }
            style={{ backgroundColor: this.colorButton(numeroDeCliques0) }}
          >
            Botão0 - { numeroDeCliques0}
          </button>

          <button
            onClick={ this.handleClick1 }
            style={{ backgroundColor: this.colorButton(numeroDeCliques1) }}
          >
            Botão1 - { numeroDeCliques1}
          </button>

          <button
            onClick={ this.handleClick2 }
            style={{ backgroundColor: this.colorButton(numeroDeCliques2) }}
          >
            Botão2 - { numeroDeCliques2}
          </button>
      </div>
    );
  }
}

export default App;
