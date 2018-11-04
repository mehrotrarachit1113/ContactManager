import React , {Component} from 'react'
import Contact from './Contact'

class Contacts extends Component{
    constructor(){
        super();
        this.state = {
            contacts : [
                {
                    id : 1,
                    name : 'testUser1',
                    email : 'testUser1@gmail.com',
                    phone : '1234567890' 
                },
                {
                    id : 2,
                    name : 'testUser2',
                    email : 'testUser2@gmail.com',
                    phone : '1234567890'
                },
                {
                    id : 3,
                    name : 'testUser3',
                    email : 'testUser3@gmail.com',
                    phone : '1234567890'
                },
                {
                    id : 4,
                    name : 'testUser4',
                    email : 'testUser1@gmail.com',
                    phone : '1234567890'
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