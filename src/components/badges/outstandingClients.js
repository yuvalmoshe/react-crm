import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import '../../styles/analytics.css'

library.add(faUserCircle)

class OutstandingClients extends Component {

    sold = (users) =>{
        let sold = users.filter(u => {return(u.sold === false)})
        return(sold.length)
    }
    
    render() {
        let users = this.props.users
        return (
            <div>
            <FontAwesomeIcon className="iconUser" icon="user-circle" size="4x" color="white" style={{backgroundColor: "rgb(243, 45, 45)", padding: "15px", borderRadius: "50%"}}/>
            <div className="sold">{this.sold(users)}</div>
            <div className="soldClient">Outstanding Clients</div>
            </div>
        )
    }
}

export default OutstandingClients;

