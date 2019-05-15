import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Noticia extends Component {
  render() {
    const { noticia } = this.props;
    return (
      <div className="card mb-4">
        <img src={ !noticia.urlToImage ? 'https://picsum.photos/id/1/200/300' : noticia.urlToImage } className="card-img-top" alt={ noticia.title } />
          <div className="card-body">
            <h5 className="card-title">{ noticia.title }</h5>
            <p className="card-text">{ noticia.content }</p>
            <a href={ noticia.url } target="_blank" rel="noopener noreferrer"  className="btn btn-primary">Read more</a>
          </div>
      </div>
    );
  }
}

Noticia.propTypes = {
  noticia: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
    urlToImage: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default Noticia;
