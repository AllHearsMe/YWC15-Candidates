import React, { Component } from 'react';
import NavigationBar from './NavigationBar.js';
import Header from './Header.js';
import Body from './Body.js';
import './NetworkAnim.css';

const majors = ['content', 'design', 'marketing', 'programming'];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {data: [], major: majors[0], keyword: ''};
  }
  componentWillMount() {
    fetch('https://ywc15.ywc.in.th/api/interview')
      .then((resp) => resp.json())
      .then((resp) => {this.setState({data: resp})});
  }
  handleSelect = (selectedKey) => this.setState({major: selectedKey});
  handleSearch = (event) => this.setState({keyword: event.target.value});
  render() {
    return (
      <div>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
        <NavigationBar major={this.state.major} majors={majors} handleSelect={this.handleSelect} handleSearch={this.handleSearch}/>
        <Header/>
        <Body data={this.state.data} major={this.state.major} keyword={this.state.keyword}/>
      </div>
    );
  }
}

export default App;
