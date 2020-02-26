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
                        <h4>Enter 4 Digit Check-In Code And Press #</h4>
                        {/* <input/> */}
                    </div>
                    <div className="col-sm-6 m-1" >
                        <div className="row">
                            <Button className="btn btn-lg m-2 btn-info">1</Button>
                            <Button className="btn btn-lg m-2 btn-info">2</Button>
                            <Button className="btn btn-lg m-2 btn-info">3</Button>
                        </div>
                        <div className="row">
                            <Button className="btn btn-lg m-2 btn-info">4</Button>
                            <Button className="btn btn-lg m-2 btn-info">5</Button>
                            <Button className="btn btn-lg m-2 btn-info">6</Button>
                        </div>
                        <div className="row">
                            <Button className="btn btn-lg m-2 btn-info">7</Button>
                            <Button className="btn btn-lg m-2 btn-info">8</Button>
                            <Button className="btn btn-lg m-2 btn-info">9</Button>
                        </div>
                        <div className="row">
                            <Button className="btn btn-lg m-2 btn-info">0</Button>
                            <Button className="btn btn-lg m-2">x</Button>
                            <Button className="btn btn-lg m-2">#</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Welcome;