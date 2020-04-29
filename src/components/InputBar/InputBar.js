import React from 'react';
import './InputBar.css'
// import api from '../../services/api'

class InputBar extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            inputValue: []
        }
        this.handleInputValue = this.handleInputValue.bind(this)
    };

    async handleInputValue(e){
        const array = this.state.inputValue;
            // await api.post('/', {array})
            // .then(response => {
            //     this.props.sendArray(response.data.sorted)
            // })
            // .catch(err => {
            //     console.log(err)
            // })
            this.props.sendArray(array)

        e.preventDefault();
    };

    render() {
        return (
            <form onSubmit={this.handleInputValue} className="componentDiv" >
            <div className="upperDiv">{this.props.innerText}</div>
                <input
                    type="text"
                    placeholder={this.props.placeHolder}
                    className="inputBar"
                    onChange={e => {
                        //Essa função vai receber uma string de números, 
                        //colocar cada digito dessa string em um array,
                        //converter para um inteiro com o método map e
                        //atualizar o estado do componente

                        let array = e.target.value.split('').map(Number);
                            
                        this.setState({
                            inputValue: array
                        });
                    }} />

                <input
                    type="submit"
                    className="button"
                    value="SORT" />
            </form>
        );
    };
};

export default InputBar;