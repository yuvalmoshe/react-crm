import React, { Component } from 'react';
import '../../styles/update.css'


class Update extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.user.name.split(" ")[0],
            surname: props.user.name.split(" ")[1],
            country: props.user.country,
            // id: props.user.id
        }
    }

    updateUser = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    updateSurname = (event) => {
        this.setState({
            surname: event.target.value
        })
    }

    updateCountry = (event) => {
        this.setState({
            country: event.target.value
        })
    }

    closeButton = () => {
        this.props.closePopUp(null)
    }

update = () => {
    let name= this.state.name
    let surname = this.state.surname
    let country = this.state.country
    let id = this.props.user._id 
    this.props.update(id, name, surname, country)
}
    render() {
        return (
            <div className="update-class">
                <button className="button-closePopup" onClick={this.closeButton}>X</button>
                <div className="name-div">Name: <input className="name-update" type="text" value={this.state.name} onChange={this.updateUser}></input></div>
                <br></br><br></br><br></br>
                <div className="surname-div">Surname: <input className="surname-update" type="text" value={this.state.surname} onChange={this.updateSurname}></input></div>
                <br></br><br></br><br></br>
                <div className="country-div">Country:<input className="country-update" type="text" value={this.state.country} onChange={this.updateCountry}></input></div>
                <br></br><br></br>
                <button className="button-update" onClick={this.update}>UPDATE</button>
            </div>
        )
    }
}

export default Update;