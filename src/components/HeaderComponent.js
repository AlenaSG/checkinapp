import React, {Component} from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';
import logo from '../logo.jpg'

class Header extends Component {
    render(){
        return(
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h4>BrightWheel</h4>
                                <p>a better school managing tool</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Navbar dark color="primary" sticky="top">
                    <div className="container">
                        <NavbarBrand href="/">NLM Willows Campus</NavbarBrand>
                    </div>
                </Navbar>
                <img className="p-2" src={logo} alt="school icon" />
            </React.Fragment>
        );
    }
}

export default Header;