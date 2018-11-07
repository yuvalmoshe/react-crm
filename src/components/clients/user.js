import React, { Component } from 'react';
import '../../styles/user.css'


class User extends Component {
   
    sold = () => {//פונקציה שאומרת אם המוכר מכר הרבה אז יוצג וי, אחרת יוצג קו
        if (this.props.u.sold) {
            return (<p> &#10004;</p>)
        }
        else {
            return ("-")
        }
    }

    emailType = () => { //פונקציה שאומרת אם האימל = לריק אז זה יציג קו
        if (this.props.u.emailType === null) {
            return ("-")
        }
    }

    togglePopup = () => { 
        this.props.closePopUp(this.props.u)
    }

    render() {
        // console.log(this.props.u)
        let name = this.props.u.name.split(' ') // מציג את השם בעמודה לבד, ואת שם המשפחה בעמודה לבד
        // console.log(this.props.u.firstContact)
        let date = new Date(this.props.u.firstContact) //מציג רק את התאריך,בלי שעה ומיקום
        let firstDate = date.toLocaleDateString()

        return (
            <tr className="row-first" onClick={this.togglePopup}>
                <td className="row">{name[0]}</td>
                <td className="row">{name[1]}</td>
                <td className="row">{this.props.u.country}</td>
                <td className="row">{firstDate}</td>
                <td className="row">{this.props.u.emailType}{this.emailType()}</td>
                <td className="row">{this.sold()}</td>
                <td className="row">{this.props.u.owner}</td>
            </tr>
            
        )
    }
}



export default User;