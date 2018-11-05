import React, { Component } from 'react';
import './index.css';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

class Languages extends Component {
  render() {
    const { languages, handleLanguageCheckboxClick } = this.props;
    return (
      <div className="langsContainer">
        {languages.map(({ name, isActive, locale }) => (
          <FormControlLabel
            key={name}
            control={
              <Checkbox
                checked={isActive}
                onChange={handleLanguageCheckboxClick}
                name={locale}
                value="checkedA"/>}
            label={name}/>
        ))}
      </div>
    );
  }
}

export default Languages;
