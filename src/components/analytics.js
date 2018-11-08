import React, { Component } from 'react';
import '../styles/analytics.css'
import NewClients from './badges/newClients'
import EmailsSent from './badges/emailsSent'
import OutstandingClients from './badges/outstandingClients'
import HottestCountry from './badges/hottestCountry'
import axios from 'axios'


class Analytics extends Component {
    constructor() {
        super()
        this.state = {
            users: []
        }
    }
    componentDidMount = async() => {
        let analytics = await axios.get("/analytics")
        this.setState({
            users: analytics.data 
        })
    }


    render() {
        
        return (
            <div className="badges">
            <NewClients users={this.state.users}/>
            <EmailsSent users={this.state.users} />
            <OutstandingClients users={this.state.users} />
            <HottestCountry users={this.state.users}/>
            </div>
        )
    }
}

export default Analytics;

