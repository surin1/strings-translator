import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Languages from './Languages';
import Content from './Content';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#41414a'
    },
    secondary: {
      main: '#84c052'
    },
  },
  status: {
    danger: 'orange',
  },
});

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      languages: [
        {
          locale: 'ru',
          name: 'Русский',
          isActive: true
        },
        {
          locale: 'en',
          name: 'Английский',
          isActive: true
        },
        {
          locale: 'es',
          name: 'Испанский',
          isActive: true
        },
        {
          locale: 'cz',
          name: 'Чешский',
          isActive: true
        },
        {
          locale: 'uk',
          name: 'Украинский',
          isActive: true
        }
      ]
    }
  }

  handleLanguageCheckboxClick = (e) => {
    const languages = this.state.languages.map((lang) => {
      return lang.locale === e.target.name ?
        {
          ...lang,
          isActive: !lang.isActive
        } :
        { ...lang }
    })

    this.setState({ languages })
  }

  render() {
    const { languages } = this.state;

    return (
      <MuiThemeProvider theme={theme}>
        <div className="mainContainer">
          <Header />
          <Languages languages={languages}
            handleLanguageCheckboxClick={this.handleLanguageCheckboxClick}/>
          <Content languages={languages} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
