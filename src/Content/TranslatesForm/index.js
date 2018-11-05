import React, { Component } from 'react';
import './index.css';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Panel from './Panel';
import TranslateInput from './TranslateInput';
import Button from '@material-ui/core/Button';
import SelectAll from '@material-ui/icons/SelectAll';

class TranslatesForm extends Component {
  constructor (props) {
    super(props);

    this.state = {
      varName: '',
      fields: [0],
      fieldsData: {},
      translates: {}
    }
  }

  handleFieldAdding = () => {
    const { fields } = this.state;

    this.setState({
      fields: [...fields, fields.pop() + 1]
    })
  }

  handleFieldsFilling = (varName, fieldData) => {
    const { fieldsData } = this.state;
    this.setState({
      fieldsData: {
        ...fieldsData,
        [varName]: {...fieldsData[varName], ...fieldData}
      }
    })
  }

  compileLangs = () => {
    const { templateCode } = this.props;
    const { fieldsData, translates } = this.state;
    const varNames = Object.keys(fieldsData);
    let translates1 = {};

    varNames.forEach((name) => {
      const languages = Object.keys(fieldsData[name]);
      let translateCode;
      languages.forEach((lang) => {
        if (!translates1[lang]) {
          translates1[lang] = templateCode;
        }

        translates1 = {
          ...translates1,
          [lang]: translates1[lang].replace(`{${name}}`, fieldsData[name][lang])
        }
      });
    })

    this.setState({ translates: translates1 }, () => {
      this.props.handleTranslatesCompiling(this.state.translates)
    })
  }

  render() {
    const { languages } = this.props;
    const { fields, translates } = this.state;
    const fieldsLength = fields.length;

    return (
      <div className="translatesFormContainer">
        <Typography className="codeLabel" variant="caption" gutterBottom>
          Переменные и переводы
        </Typography>
        <div className="scrollContainer">
          {fields.map((index) => (
            <Panel key={index}
              languages={languages}
              index={index}
              handleFieldsFilling={this.handleFieldsFilling}
              fieldsLength={fieldsLength}
              handleFieldAdding={this.handleFieldAdding}/>
          ))}
        </div>
        <Button onClick={this.compileLangs}
          variant="fab"
          color="secondary"
          className="compileButton">
          <SelectAll />
        </Button>
      </div>
    );
  }
}

export default TranslatesForm;
