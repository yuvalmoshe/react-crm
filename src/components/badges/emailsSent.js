import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import '../../styles/analytics.css'

library.add(faEnvelope)

class EmailsSent extends Component {

    emailType = (users) =>{
        let email = users.filter(u => {return( u.emailType != null)}) 
        // console.log(email)
        return(email.length) 
    }

    render() {
        let users=this.props.users
        return (
            <div>
            <FontAwesomeIcon className="iconEmail" icon="envelope" size="4x" color="white" style={{backgroundColor: "rgb(3, 162, 202)", padding: "15px", borderRadius: "50%"}}/>
            <div className="email">
            <div className="emailType">{this.emailType(users)}</div>
            <div className="emailsSent">Emails Sent</div>
            </div>
            </div>
           
        )
    }
}

export default EmailsSent;

