import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media, Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

class Contact extends Component {

    constructor(props){
        super(props);

        this.state = {
            fullname: '',
            email: '',
            subject: '',
            message: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event){
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event){
        console.log("Current state is: " + JSON.stringify(this.state));
        alert("Current state is: " + JSON.stringify(this.state));
        event.preventDefault();
    }

    render(){
        return(
        <div className="container">
            <div className="row row-content align-items-center">
                <div className="col-sm-4">

            
            <p>If you have any questions or would like to schedule a tour, please don’t hesitate to speak with us!</p>
            <h4>Contact us for tours and admissions:</h4>
            <address>(425) 647-3031 (phone)
            (425) 867-0625 (fax)
            norlightsmontessori@gmail.com

            Our mailing address:
            Northern Lights Montessori
            8460 NE 160th Ave
            Redmond, WA 98052

            Our Locations
            Redmond Campus
            8460 NE 160th Avenue
            Redmond, WA 98052
            (425) 497-0913

            Willows Campus (Redmond)
            14615 NE 91st ST
            Redmond, WA 98052
            (425) 867-0622</address>
            <a role="button" className="btn btn-link" href="tel:+12065551234"><i className="fa fa-phone"></i> 1-206-555-1234</a><br />
                    <a role="button" className="btn btn-link" href="mailto:fakeemail@fakeemail.co"><i className="fa fa-envelope-o"></i> campsites@nucamp.co</a>
                </div>
               
        
                    <div className="col-md-6">
                    <h2>Send us your Feedback</h2>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="fullname" md={2}>Full Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="fullname" name="fullname"
                                        placeholder="Full Name"
                                        value={this.state.fullname}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            
                           
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="email" id="email" name="email"
                                        placeholder="Email"
                                        value={this.state.email}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="subject" md={2}>Subject</Label>
                                <Col md={10}>
                                    <Input type="text" id="subject" name="subject"
                                        placeholder="Subject"
                                        value={this.state.subject}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                           
                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Your Message</Label>
                                <Col md={10}>
                                    <Input type="textarea" id="message" name="message"
                                        rows="8"
                                        value={this.state.message}
                                        onChange={this.handleInputChange}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Send
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
                </div>
        
    );
}
}

export default Contact;