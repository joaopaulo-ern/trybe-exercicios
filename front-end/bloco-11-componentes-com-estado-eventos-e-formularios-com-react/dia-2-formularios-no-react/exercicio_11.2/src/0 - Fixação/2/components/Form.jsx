import React from 'react';

class Form extends React.Component {
  constructor() {
    super();

    // this.handleChange = this.handleChange.bind(this)

    this.state = {
      mensagem: '',
      login: '',
      senha: '',
      estado: '',
      conectado: false,
    }
  };

  // Caso a função seja 'arrow' não precisa 'bindar'
  handleChange = ({ target }) => {
    const { name } = target
    const value = (target.type === 'checkbox') ? target.checked : target.value;

    this.setState({
      [name]: value, 
    });
  }

  render() {
    const { mensagem, login, senha, estado, conectado } = this.state
    return(
      <div className="form">
        <label className='labels'>
          Estado
        <select name='estado' value={ estado } onChange={ this.handleChange } >
          <option></option>
          <option>SP</option>
          <option>PI</option>
        </select>
        </label>
        {/* <label className='labels'>
          Login
          
        </label> */}
        <fieldset>
          <legend>Entrar</legend>
          <legend>Login</legend>
          <input name='login' type="text" value={ login } onChange={ this.handleChange } />
          <legend>Senha</legend>
          <input type="password" name='senha' value={ senha } onChange={ this.handleChange } />
        </fieldset>
        {/* <label className='labels'>
          Senha
        
        </label> */}
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

// 