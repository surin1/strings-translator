import React, { Component } from 'react';
import './index.css';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Add from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';

class Panel extends Component {
  constructor (props) {
    super(props);

    this.state = {
      varName: '',
      fields: [0]
    }
  }

  handleFieldAdding = () => {
    const { fields } = this.state;

    this.setState({
      fields: [...fields, fields.pop() + 1]
    })
  }

  handleInputChange = ({ target }) => {
    // console.log('handleInputChange: ', e.target.name, e.target.value)
    const fieldData = {
      [target.name]: target.value
    }
    this.props.handleFieldsFilling(this.state.varName, fieldData)
  }

  render() {
    const { languages, index, fieldsLength, handleFieldAdding } = this.props;
    const isLast = fieldsLength === index + 1;

    return (
      <div className="panelContainer">
        <ExpansionPanel className="panel">
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{this.state.varName || 'Введите имя'}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <form className="translateForm">
              <TextField
                id={index.toString()}
                value={this.state.varName}
                label="Имя переменной"
                onChange={(e) => this.setState({varName: e.target.value})}
                margin="normal"
              />
              {languages.map(({ name, locale, isActive }) => (isActive ?
                <TextField
                  key={locale}
                  id="multiline-flexible"
                  label={name}
                  multiline
                  name={locale}
                  rowsMax="4"
                  onChange={this.handleInputChange}
                  margin="normal"
                /> : null))}
            </form>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        {isLast && <div className="addIcon">
          <IconButton onClick={handleFieldAdding}
            className="addButton" mini="true"
            color="secondary"
            aria-label="Add">
            <Add />
          </IconButton>
        </div>}
      </div>
    );
  }
}

export default Panel;
