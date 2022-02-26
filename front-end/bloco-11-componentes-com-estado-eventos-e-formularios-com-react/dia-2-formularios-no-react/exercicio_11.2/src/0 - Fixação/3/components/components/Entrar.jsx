import React from 'react';

class Entrar extends React.Component {
  render() {
    const { handleChange, login, senha } = this.props;
    return(
      <div className="form">
        <fieldset>
          <legend>Entrar</legend>
          <legend>Login</legend>
          <input type="text" name='login' value={ login } onChange={ handleChange } />
          <legend>Senha</legend>
          <input type="password" name='senha' value={ senha } onChange={ handleChange } />
        </fieldset>
      </div>
    )
  }
}

export default Entrar;