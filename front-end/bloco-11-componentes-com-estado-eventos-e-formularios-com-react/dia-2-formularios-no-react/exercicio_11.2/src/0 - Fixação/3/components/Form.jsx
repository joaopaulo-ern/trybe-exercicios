import React from 'react';
import Entrar from './components/Entrar';
import Estado from './components/Estado';

class Form extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      mensagem: '',
      login: '',
      senha: '',
      estado: '',
      conectado: false,
    }
  };

  handleChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { mensagem, login, senha, estado, conectado } = this.state
    return(
      <div className="form">
        <Estado estado={ estado } handleChange={ this.handleChange }/>
        <Entrar login={ login } senha={ senha } handleChange={ this.handleChange } />
        <label className='labels'>
          Manter conectado
        <input type="checkbox" name='conectado' value={ conectado } onChange={ this.handleChange }/>
        </label>
        <label className='labels'>
          Mensagem
        <textarea name='mensagem' className='mensagem' value={ mensagem } onChange={ this.handleChange } />
        </label>
      </ div>
    )
  }
}

export default Form;
