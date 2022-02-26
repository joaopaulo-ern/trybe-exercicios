import React from 'react';

class Estado extends React.Component {
  render() {
    const { handleChange, estado } = this.props;
    return(
      <label className='labels'>
      Estado
        <select name='estado' value={ estado } onChange={ handleChange } >
          <option></option>
          <option>SP</option>
          <option>PI</option>
        </select>
    </label>
    )
  }
}

export default Estado;