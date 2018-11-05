import React, { Component } from 'react';
import './index.css';
import Typography from '@material-ui/core/Typography';
import TemplateCode from './TemplateCode';
import TranslatesForm from './TranslatesForm';
import TranslatesList from './TranslatesList';
import TemplatePreview from './TemplatePreview';

class Content extends Component {
  constructor (props) {
    super(props);

    this.state = {
      templateCode: '',
      translates: null,
      activeLang: 'ru',
      isCopyMode: false
    }
  }

  handleCodeChange = (value) => {
    this.setState({
      templateCode: value
    })
  }

  handleTranslatesCompiling = (translates) => {
    this.setState({
      translates,
      isCopyMode: true
    })
  }

  handleGoBack = () => {
    this.setState({
      isCopyMode: false
    })
  }

  handleChangeActiveLang = (locale) => {
    this.setState({
      activeLang: locale
    })
  }

  render() {
    const { languages } = this.props;
    const { templateCode, translates, activeLang, isCopyMode } = this.state;

    return (
      <div className="contentContainer">
        {!isCopyMode ?
          <React.Fragment>
            <div className="templateCode">
              <TemplateCode handleCodeChange={this.handleCodeChange} />
            </div>
            <div className="formContainer">
              <TranslatesForm languages={languages}
                templateCode={templateCode}
                handleTranslatesCompiling={this.handleTranslatesCompiling} />
            </div>
          </React.Fragment> :
          <React.Fragment>
            <TranslatesList handleGoBack={this.handleGoBack} languages={languages} onChangeActiveLang={this.handleChangeActiveLang} />
            <TemplatePreview translates={translates} activeLang={activeLang} />
          </React.Fragment>}
      </div>
    );
  }
}

export default Content;
