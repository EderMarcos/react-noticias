import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Buscador extends Component {

  searchBar = React.createRef();

  onResult = e => {
    e.preventDefault();
    this.props.onSearch(this.searchBar.current.value);
    e.currentTarget.reset();
  };

  render() {
    return (
      <div className="mb-4">
        <form onSubmit={ this.onResult }>
          <div className="form-row justify-content-center">
            <div className="col-lg-4">
              <input type="text" className="form-control" ref={ this.searchBar } />
            </div>
            <div className="col-lg-2">
              <button type="submit" className="btn btn-primary btn-block">Buscar</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

Buscador.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Buscador;
