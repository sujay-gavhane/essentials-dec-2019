import React from 'react';
import './App.css';
import IssuesList from './components/IssuesList';
import Form from './components/Form';
import './styles/common.css';

class App extends React.Component {
  state = { issues : [] }

  listIssues = (issues) => {
    this.setState({issues: issues});
    console.log('App', this.state.issues)
  }
  render(){
    return (
      <div id='main-container'>
        <header>GitHub Issues</header>
        <Form addIssuesToList={this.listIssues}/>
        <IssuesList issues={this.state.issues} />
      </div>
    );
  }
}

export default App;
