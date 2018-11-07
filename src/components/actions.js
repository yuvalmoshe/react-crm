import React, { Component } from 'react';
import '../styles/actions.css'
import InputClient from './actions/inputClient.js'
import InputUpdate from './actions/inputUpdate.js'
import InputAdd from './actions/inputAdd.js'
import axios from 'axios'

class Actions extends Component {
    constructor() {
        super()
        this.state = {
            users: [],
            client: "",
            owner: "",
            emailType: "",
            sold: true
        }
    }

    findClient = () => {
        let wantedClient = this.state.users.find(u => u.name === this.state.client) //פונקציה שמוצאת את השם של הלקוח
        return (wantedClient) //מחזירה את הפונקציה בעזרת שם האובייקט
    }

    client = (value) => {
        this.setState({
            client: value
        })
    }

    owner = (value) => {
        this.setState({
            owner: value
        })
    }

    componentDidMount = async () => {
        let actions = await axios.get("http://localhost:5555/actions")
        this.setState({
            users: actions.data //  אקסיוס מגיש אובייקט אבל אנחנו רוצים מערך לכן נעשה .דטה כדי להכנס לתוך המערך
        })
    }

    setClients = (client) => {
        //this.setState// מציאת הלקוח במקום של הבעלים - change state - notic copy references
         let copiedArray = this.state.users.map((u)=>{
             if(u.id === client.id){
                 return client;
             }
             return u;
         });
         this.setState({users:copiedArray});
        };

    transferLink = () => {
        let wanted = this.findClient(); //מציאת הלקוח
        axios.post('http://localhost:5555/clients/' + wanted._id, { owner: this.state.owner })
        .then(this.setClients)
    }

    emailType = (value) => {
        this.setState({
            emailType: value
        })
    }

    sendLink = () => {
        let wantedEmail = this.findClient(); //מציאת הלקוח בעזרת הפונקציה
        axios.post('http://localhost:5555/clientsEmail/' + wantedEmail._id, { emailType: this.state.emailType })
        .then(this.setClients)
    }

    declareLink = () => {
        let wantedClientsSold = this.findClient();
        axios.post('http://localhost:5555/clientsSold/' + wantedClientsSold._id, { sold: this.state.sold })
        .then(this.setClients)
    }

    inputAdd = async (inputs) => {
        let addClient = {name: inputs.textName + " " + inputs.textSurname, country: inputs.textCountry, owner: inputs.textOwner}
            await axios.post('http://localhost:5555/clientsAdd', addClient)
    }

    render() {
        return (
            <div className="action">
                <h3 className="update">UPDATE</h3>
                <InputClient text={this.state.client} users={this.state.users} client={this.client} />
                <br></br>
                <InputUpdate transferLink={this.transferLink} textEmail={this.state.emailType} text={this.state.owner} setOwner={this.owner} emailType={this.emailType} sold={this.sold} sendLink={this.sendLink} declareLink={this.declareLink} />
                <br></br><br></br>
                <hr></hr>
                <InputAdd inputAdd={this.inputAdd}/>
            </div>

        )
    }
}

export default Actions;