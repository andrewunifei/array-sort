import React from 'react';
import './App.css';
import InputBar from '../InputBar/InputBar'
import OutPutBar from '../OutputBar/OutputBar'

class App extends React.Component{
  render(){
    return (
      <div className="backG">
          <InputBar placeHolder="Entre com o array" buttonValue="SORT" innerText="ARRAY TO SORT" />
          <OutPutBar buttonValue="CLEAN" innerText="ARRAY SORTED" />
      </div>
    );
  }
}

export default App;
