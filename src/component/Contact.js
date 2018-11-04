import React , {Component} from 'react';
import PropTypes from 'prop-types';

class Contact extends Component{

    render(){
        const {name , email , phone} = this.props.contact;
        return(
            <div className = "card card-body mb-3">
               <h4>Name : {name}</h4>
               <ul className = "list-group">
                   <li className = "list-group-item">email : {email}</li>
                   <li className = "list-group-item">phone : {phone}</li>
               </ul>  
            </div>
        );
    }
};

Contact.defaultProps = {
   contact : 'Not Mentioned'
};

Contact.PropTypes = {
    contact : PropTypes.object.isRequired,
};

export default Contact;