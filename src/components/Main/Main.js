import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Buscador from '../Buscador/Buscador';
import Noticias from '../Noticias/Noticias';

class Main extends Component {

  onResult = query => {
    this.props.onSearch(query);
  };

  render() {
    return (
      <div className="container my-4">
        <div className="row justify-content-center">
          <div className="col-lg-10 border p-4 bg-white">
            <h5 className="text-center mb-4">Busca notificias por categoria</h5>
            <Buscador onSearch={ this.onResult } />
            <Noticias articles={ this.props.articles } />
          </div>
        </div>
      </div>
    );
  }
}

Main.propTypes = {
  articles: PropTypes.array.isRequired,
};

export default Main;
