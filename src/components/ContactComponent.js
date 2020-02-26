import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';

function Contact(props){
    return(
        <div>
            <p>If you have any questions or would like to schedule a tour, please don’t hesitate to speak with us!
            Contact Us For tours and admissions:
            (425) 647-3031 (phone)
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
            (425) 867-0622</p>

            <div className="container">
            <div className="row">
                <div className="col">
                    <h2>Contact Us</h2>
                    <hr />
                </div>
            </div>

            <div className="row row-content align-items-center">
                <div className="col-sm-4">
                    <h5>Our Address</h5>
                    <address>
                        1 Nucamp Way<br />
                        Seattle, WA 98001<br />
                        U.S.A.
                    </address>
                </div>
                <div className="col">
                    <a role="button" className="btn btn-link" href="tel:+12065551234"><i className="fa fa-phone"></i> 1-206-555-1234</a><br />
                    <a role="button" className="btn btn-link" href="mailto:fakeemail@fakeemail.co"><i className="fa fa-envelope-o"></i> campsites@nucamp.co</a>
                </div>
            </div>
        </div>

        
        </div>
    );
}

export default Contact;