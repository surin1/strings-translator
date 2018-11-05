import React, { Component } from 'react';
import './index.css';
import Typography from '@material-ui/core/Typography';

class Header extends Component {
  render() {
    return (
      <div className="headerContainer">
        <Typography variant="display2" gutterBottom>
          Переводчик
        </Typography>
      </div>
    );
  }
}

export default Header;
