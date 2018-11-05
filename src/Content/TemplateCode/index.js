import React, { Component } from 'react';
import './index.css';
import Typography from '@material-ui/core/Typography';

class TemplateCode extends Component {
  handleTextareaChange = ({ target }) => {
    this.props.handleCodeChange(target.value)
  }

  render() {
    return (
      <div>
        <Typography className="codeLabel" variant="caption" gutterBottom>
          Код шаблона
        </Typography>
        <textarea className="codeTextarea" onChange={this.handleTextareaChange}/>
      </div>
    );
  }
}

export default TemplateCode;
