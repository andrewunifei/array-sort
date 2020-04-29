import React from 'react';
import './App.css';
import InputBar from '../InputBar/InputBar'
import OutPutBar from '../OutputBar/OutputBar'
import '../../styles/button.css';
import '../../styles/upperDiv.css';
import '../../styles/componentDiv.css';

class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      array: []
    }

    this.sendArray = this.sendArray.bind(this)
  };

  sendArray(array){
    this.setState({array})
  };

  render(){
    return (
      <div className="backG">
        <div className="backG2">
          <InputBar
            placeHolder="Entre com o array"
            buttonValue="SORT"
            innerText="ARRAY TO SORT"
            sendArray={this.sendArray} />
          <OutPutBar buttonValue="CLEAN" innerText="ARRAY SORTED" array={this.state.array} />
        </div>
      </div>
    );
  }
}

export default App;
