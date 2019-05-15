import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    return (
      <div className="display-4 text-center py-4 border bg-white">
        { this.props.title }
      </div>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
