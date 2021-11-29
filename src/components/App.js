import React from 'react';
import SearchBar from './SearchBar';
import Calculator from "./Calculator";

class App extends React.Component {

    state = { weight: "" };

    updateInputs = (weight, height) => {
        this.setState({ weight: weight });
    }
  render () {
      return (
            <div>Test div
                <SearchBar onSubmit={this.updateInputs}/>
                <Calculator values={this.state.weight}></Calculator>
                {this.state.weight}
            </div>
      );
  }
}

export default App;
