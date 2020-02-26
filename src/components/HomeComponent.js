import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderCard({item}) {
    return (
        <Card>
            <CardBody>
                <CardTitle>{item.firstname}</CardTitle>
                <CardText>{item.lastname}</CardText>
            </CardBody>
        </Card>
    );
}
function Home(props) {
    return (
        <div className="container"><h3>Checked In Students</h3>
            <div className="row">
                
                <div className="col-md m-1">
                    <RenderCard item={props.student} />
                </div>
            </div>
        </div>
    );
}

export default Home;   