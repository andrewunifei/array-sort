import React from 'react';
import './InputBar.css'

class InputBar extends React.Component{
    render() {
        return (
            <div className="componentDiv">
                <div className="upperDiv">{this.props.innerText}</div>
                <input placeholder={this.props.placeHolder} className="inputBar"></input>
                <button className="button">{this.props.buttonValue}</button>
            </div>
        );
    };
};

export default InputBar;