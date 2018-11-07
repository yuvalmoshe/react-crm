import React, { Component } from 'react';
import '../../styles/actions.css'

class InputClient extends Component {
    constructor(){
        super() 
    }

    updateText = (event) => {
            this.props.client(event.target.value) 
    }


    render() {
        // console.log(this)
                return (
                    <div>
                            Client: <input list="clientName" className="input-client" type="text" placeholder="Client Name" value={this.props.text} onChange={this.updateText} ></input>
                            <datalist id="clientName">
                            {this.props.users.map(u =>{
                                return (
                                <option value={u.name}></option>
                                )
                            }
                            )}
                            </datalist>
                    </div>
                    
                )

            }

    }


export default InputClient;



//     inputChange = (event) => {
//     this.setState({
//         users: event.target.value

//     })
// }
// value={this.props.users} onChange={this.inputChange}