import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class Welcome extends Component{
    constructor(props){
        super(props);

    
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-5 m-1">
                        <h3>Welcome to</h3>
                        <h2>NLM Willows Campus!</h2>
                        <h4>Enter 4 Digit Check-In Code</h4>
                        {/* <input/> */}
                    </div>
                    <div className="col-sm-5 m-1">
                        <div className="row">
                            <Button className="btn btn-lg m-2">1</Button>
                            <Button className="btn btn-lg m-2">2</Button>
                            <Button className="btn btn-lg m-2">3</Button>
                        </div>
                        <div className="row">
                            <Button className="btn btn-lg m-2">4</Button>
                            <Button className="btn btn-lg m-2">5</Button>
                            <Button className="btn btn-lg m-2">6</Button>
                        </div>
                        <div className="row">
                            <Button className="btn btn-lg m-2">7</Button>
                            <Button className="btn btn-lg m-2">8</Button>
                            <Button className="btn btn-lg m-2">9</Button>
                        </div>
                        <div className="row">
                            <Button className="btn btn-lg m-2">0</Button>
                            <Button className="btn btn-lg m-2">X</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Welcome;