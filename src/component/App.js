import React , {Component} from 'react';
import Contacts from './Contacts' ;
import Header from './Header'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

class App extends Component{
    render(){
        return(
            
            <div>
                <Header branding = "Contact Manager"/>

                <div className = "container">
                    <Contacts />
                    
                </div>
        </div>
        );
    }
}

export default App;