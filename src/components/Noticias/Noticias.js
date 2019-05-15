import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Noticia from '../Noticia/Noticia';

class Noticias extends Component {
  render() {
    return (
      <div className="row">
        {
          this.props.articles.map((item, key) => (
            <div className="col-lg-4" key={ key }>
              <Noticia noticia={ item } />
            </div>
          ))
        }
      </div>
    );
  }
}

Noticias.propTypes = {
  articles: PropTypes.array.isRequired,
};

export default Noticias;
