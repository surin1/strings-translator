import React, { Component } from 'react';
import './index.css';
import Typography from '@material-ui/core/Typography';

class TemplatePreview extends Component {
  render() {
    const { translates, activeLang } = this.props;
    console.log('activeLang: ', activeLang)
    const value = translates[activeLang];
    console.log('translates 123: ', translates)
    return (
      <div>
        <Typography className="codeLabel" variant="caption" gutterBottom>
          Готовый код шаблона [ru]
        </Typography>
        <textarea className="previewTextarea" disabled value={value}/>
      </div>
    );
  }
}

export default TemplatePreview;
