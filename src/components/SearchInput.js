import React, { Component } from 'react';
import {Well, FormControl} from 'react-bootstrap';

class SearchInput extends Component {

  constructor(props){
    super(props);
    this.state = {
      value: props.value
    }
  }

  onChange(event){
    this.setState({value: event.target.value})
    this.props.onChange(this.state.value);
  }

  render() {
    return (
      <div className="App">
        <Well>
          <FormControl type="text" value={this.state.value} placeholder="Search Books..." onChange={this.onChange.bind(this)} />
        </Well>
      </div>
    );
  }
}

export default SearchInput;
