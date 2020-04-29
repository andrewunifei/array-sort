import React from 'react';
import './OutputBar.css';

class OutputBar extends React.Component{
    render(){
        return (
            <div className="componentDiv">
                <div className="upperDiv">{this.props.innerText}</div>
                <div className="outputDiv" data-placeholder='data- placeholder'></div>
                <button className="button">{this.props.buttonValue}</button>
            </div>
        );
    };
};

export default OutputBar;