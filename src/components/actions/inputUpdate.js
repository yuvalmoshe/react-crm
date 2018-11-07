import React, { Component } from 'react';
import '../../styles/actions.css'


class InputUpdate extends Component {
    constructor(){
        super()
        this.state ={
            textEmail: ""
        }
    }

    updateText = (event) => { //פונקציה שמשנה את הסטייט, ולאחר מכן לוקחת את הבעלים מהאבא
            this.props.setOwner(event.target.value)
    }

    updateEmailText =(event) => {
            this.props.emailType(event.target.value)
    }

    render() {
        return (
            <div>
            Transfer ownership to
                <select value={this.props.text} onChange={this.updateText} className="option">
                    <option>Owner</option>
                    <option>Emily Durham</option>
                    <option>Janice Alvarado</option>
                    <option >Leila Howe</option>
                    <option >Hull Conrad</option>
                    <option >Martin Massey</option>
                    <option >Shepherd Stone</option>
                    <option >Barton Ramirez</option>
                    <option >Shepherd Stone</option>
                </select>
                <div className="transfer" onClick={this.props.transferLink}>TRANSFER</div>
                <br></br><br></br>


                Send email:
                <select className="send-email" value={this.props.textEmail} onChange={this.updateEmailText}>
                    <option>Email Type</option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                    <option>D</option>
                </select>
                <div className="send" onClick={this.props.sendLink}>SEND</div>
                <br></br><br></br>
                Declare sale!
                        <div className="declare" onClick={this.props.declareLink}>DECLARE</div>

            </div>
        )
    }
}

export default InputUpdate;

