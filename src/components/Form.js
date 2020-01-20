import React from 'react';
import axios from 'axios';

class Form extends React.Component {
  state = { owner: '', repository: '' };
  handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.get(`https://api.github.com/repos/${this.state.owner}/${this.state.repository}/issues`);
    this.props.addIssuesToList(response.data);
    this.setState({ owner: '', repository: '' });
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.owner} onChange={event => this.setState({ owner: event.target.value })} placeholder='GitHub Owner Name' />
        <input type="text" value={this.state.repository} onChange={event => this.setState({ repository: event.target.value })} placeholder='GitHub Repository Name' />
        <button>Get Issues</button>
      </form>
    );
  }
}

export default Form;
