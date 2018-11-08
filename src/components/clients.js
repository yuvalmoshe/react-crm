import React, { Component } from 'react';
import '../styles/clients.css'
import User from './clients/user'
import Update from './clients/update'
import axios from 'axios'

class Clients extends Component {
    constructor() {
        super()
        this.state = {
            users: [],
            text: "",
            textOption: "name",
            showPopup: null
        }
    }
    componentDidMount = async() => {
        let clients = await axios.get("/clients")
        // console.log(clients)
        this.setState({
            users: clients.data //אקסיוס מגיש אובייקט אבל אנחנו רוצים מערך
        })
    }
    
    updateText = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    updateOption = (event) => {
        this.setState({
            textOption: event.target.value
        })
    }

    closePopUp = (user) => { //פונקציה שמשנה את הסטייט, במקום להציג פופ-אפ זה משנה לשם המשתמש
        this.setState({
            showPopup: user
        });
    }

    update = (id, name, surname, country) => {
      let users = this.state.users.map(u =>{
          if(u._id === id) {
             u.name = name + " " + surname;
             u.country = country;
          }
          return u;
        
    })
    this.setState({
        users: users
    })
    }

    render() {
        return (
            <div className="container">
                <input className="search-input" type="text" placeholder="Search" value={this.state.text} onChange={this.updateText} />
                <select className="options" value={this.state.textOption} onChange={this.updateOption}>
                    <option value="name">Name</option>
                    <option value="country">Country</option>
                    <option value="emailType">Email</option>
                    <option value="sold">Sold</option>
                    <option value="owner">Owner</option>
                </select>
                <div>
                    {this.state.showPopup ?
                        <Update closePopUp={this.closePopUp} user={this.state.showPopup} update={this.update}  />
                        : null}
                </div>
                <table className="col-1"><tbody>
                    <tr className="main">
                        <td className="nav">Name</td>
                        <td className="nav">Surname</td>
                        <td className="nav">Country</td>
                        <td className="nav">First Contact</td>
                        <td className="nav">Email</td>
                        <td className="nav">Sold</td>
                        <td className="nav">Owner</td>
                    </tr>
                    {this.state.users.map(u => {
                        if ((u[this.state.textOption] || "").toLowerCase().includes(this.state.text.toLowerCase())) {
                            return (
                                <User key={u._id} u={u} closePopUp={this.closePopUp} />
                            )

                        }
                    })}
                </tbody>
                </table>
            </div>
        )
    }
}

export default Clients;