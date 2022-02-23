import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.handleClick0 = this.handleClick0.bind(this)
    this.handleClick1 = this.handleClick1.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
  }

  handleClick0() {
    console.log('Clicou! no 0')
  }
  handleClick1() {
    console.log('Clicou! no 1')
  }
  handleClick2() {
    console.log('Clicou! no 2')
  }

  render() {
    return (
      <div>
        <button onClick={ this.handleClick0 }>Botão0</button>
        <button onClick={ this.handleClick1 }>Botão1</button>
        <button onClick={ this.handleClick2 }>Botão2</button>
      </div>
    );
  }
}

export default App;
