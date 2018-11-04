import React , {Component} from 'react'
import Contact from './Contact'

class Contacts extends Component{
    constructor(){
        super();
        this.state = {
            contacts : [
                {
                    id : 1,
                    name : 'Rachit Mehrotra',
                    email : 'rachit.mehrotra8@gmail.com',
                    phone : '9670605024' 
                },
                {
                    id : 2,
                    name : 'Rashmi Singh',
                    email : 'testgkp@gmail.com',
                    phone : '123456789'
                },
                {
                    id : 3,
                    name : 'Nooru Mehrotra',
                    email : 'noor@gmail.com',
                    phone : '1234567890'
                },
                {
                    id : 4,
                    name : 'Bani Mehrotra',
                    email : 'bani@gmail.com',
                    phone : '9876543210'
                }
            ]
        }
    };

    render(){
        const {contacts} = this.state;
        return(
            <div>
                {contacts.map(contact => (
                    <Contact
                        key = {contact.id}
                        contact = {contact}
                    />
                ))}
            </div>   
        );
    }
};

export default Contacts;