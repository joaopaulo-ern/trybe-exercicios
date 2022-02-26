import React from 'react';

class Form extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this)

    this.state = {
      areaDeTexto: '',
    }
  };

  handleChange(event) {
    this.setState({
      areaDeTexto: event.target.value,
    });
  }

  render() {
    const { areaDeTexto } = this.state
    return(
      <div className="form">
        <label>
          Estado
        <select>
          <option>SP</option>
          <option>RJ</option>
          <option>PI</option>
        </select>
        </label>
        <label>
          Login
          <input type="text" />
        </label>
        <label>
          Senha
        <input type="password" />
        </label>
        <label className='labels'>
          Mensagem
        <textarea rows='100px' cols='100' className='areaTexto' value={ areaDeTexto } onChange={ this.handleChange } />
        </label>
      </ div>
    )
  }
}

export default Form;