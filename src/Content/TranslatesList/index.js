import React, { Component } from 'react';
import './index.css';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import ContentCopy from '@material-ui/icons/ContentCopy';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

class TranslatesList extends Component {
  handleActiveLangChange = ({ currentTarget }) => {
    const locale = currentTarget.getAttribute('name');

    this.props.onChangeActiveLang(locale)
  }

  render() {
    const { languages, handleGoBack } = this.props;

    return (
      <div className="translatesList">
        {languages.map(({ locale, isActive, name }) => (
          isActive && <React.Fragment key={locale}>
            <ListItem
              role={undefined}
              button
              name={locale}
              onClick={this.handleActiveLangChange}
              className="listItem">
              <ListItemText primary={name} />
              <ListItemSecondaryAction>
                <IconButton aria-label="Comments">
                  <ContentCopy />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
        <Button variant="contained" onClick={handleGoBack} color="secondary" className="backButton">
          Назад
        </Button>
      </div>
    );
  }
}

export default TranslatesList;
