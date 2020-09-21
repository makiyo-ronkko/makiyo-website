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
      <div className='Project section' id='project'>
        <div className='Project-container'>
          <div className='Proejct-title'>
            <h1 style={{ margin: '20px', textTransform: 'uppercase' }}>
              Project
            </h1>
            {/* <img
              src={this.state.imgUrl}
              alt='makiyo-ronkko'
              style={{ width: '10%' }}
            /> */}
          </div>
          <h3 style={{ margin: '20px' }}>
            My Github account: {this.state.login}
          </h3>
          <div style={{ textAlign: 'center' }}>
            <p>♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢</p>
            <p>♢♢♢♢♢ Under construction ♢♢♢♢♢</p>
            <p>♢♢♢♢♢♢♢ Coming soon! ♢♢♢♢♢♢♢</p>
            <p>♢♢♢♢ Thank you for your patience! ♢♢♢♢</p>
            <p>♢♢ In the meantime, please visit my github ♢♢</p>
            <p>♢♢♢♢♢♢♢♢ Kiitos paljon! ♢♢♢♢♢♢♢♢</p>
            <p>♢♢♢♢♢♢♢ ありがとうございます! ♢♢♢♢♢♢♢</p>
            <p>♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
