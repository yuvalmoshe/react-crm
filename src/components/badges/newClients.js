import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'
import '../../styles/analytics.css'

library.add(faChartLine)

class NewClients extends Component {

    firstContact = (users) => {
        return users.filter(u => {
            // console.log(u.firstContact) // //show all the date whit time.
            return (new Date(u.firstContact).getMonth() === new Date().getMonth() && new Date(u.firstContact).getFullYear() === new Date().getFullYear() ) 
        }).length
    }


    render() {
        let users = this.props.users

        // let dateTime = new Date(yourString + "Z");

        return (
            <div>
                <FontAwesomeIcon className="iconNewClients" icon="chart-line" size="4x" color="white" style={{ backgroundColor: "rgb(61, 218, 61)", padding: "15px", borderRadius: "50%" }} />
                <div className="firstContact">{this.firstContact(users)}</div>
                <div className="newClients">New {new Date().toLocaleString('en-us', {month: 'long'})} Clients</div>
            </div>
        )
    }
}

export default NewClients;
