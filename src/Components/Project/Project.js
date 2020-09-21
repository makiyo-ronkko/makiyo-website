import React, { Component } from 'react';
import axios from 'axios';

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrl: '',
      login: '',
      isLoaded: false,
    };
  }

  async componentDidMount() {
    const url = `https://api.github.com/users/${this.props.username}`;
    let response = await axios.get(url);
    let data = response.data;
    console.log(data);
    this.setState({
      imgUrl: data.avatar_url,
      login: data.login,
      isLoaded: true,
    });
  }

  render() {
    return (
      <div className='Project section'>
        {this.state.isLoaded ? (
          <div className='Project-container'>
            <h1>Project</h1>
            <h3>{this.state.login}</h3>
            <img
              src={this.state.imgUrl}
              alt='makiyo-ronkko'
              style={{ width: '10%' }}
            />
          </div>
        ) : (
          <div className='loader' />
        )}
      </div>
    );
  }
}

export default Project;
