import React, { Component } from 'react';
import '../../styles/actions.css'


class InputAdd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            textName: "",
            textSurname: "",
            textCountry: "",
            textOwner: "",
        }
    }
    updateNameText = (event) => {
        this.setState({
            textName: event.target.value
        })
    }

    updateSurnameText = (event) => {
        this.setState({
            textSurname: event.target.value
        })
    }

    updateCountryText = (event) => {
        this.setState({
            textCountry: event.target.value
        })
    }

    updateOwnerText = (event) => {
        this.setState({
            textOwner: event.target.value
        })
    }

    inputAdd = () => {
        this.props.inputAdd(this.state)
    }

    render() {
        return (
            <div>
                <h3 className="add-client">ADD CLIENT</h3>
                First name: <input className="first-name" type="text" value={this.state.text} onChange={this.updateNameText}></input>
                <br></br><br></br>
                Surname: <input className="surname" type="text" value={this.state.textSurname} onChange={this.updateSurnameText}></input>
                <br></br><br></br>
                Country: <input className="country" type="text" value={this.state.textCountry} onChange={this.updateCountryText}></input>
                <br></br><br></br>
                Owner:  <input className="owner" type="text" value={this.state.textOwner} onChange={this.updateOwnerText}></input>
                <br></br><br></br>
                <button className="addNewClient" onClick={this.inputAdd}>Add New Client</button>
            </div>
        )
    }
}

export default InputAdd;

