import React from 'react';

function handleClick0() {
  console.log('Clicou no botão 0!')
}

function handleClick1() {
  console.log('Clicou no botão 1!')
}

function handleClick2() {
  console.log('Clicou no botão 2!')
}
class App extends React.Component {
  render() {
    return (
      <div>
        <button onClick={handleClick0}>Botão0</button>
        <button onClick={handleClick1}>Botão1</button>
        <button onClick={handleClick2}>Botão2</button>
      </div>
    );
  }
}

export default App;
