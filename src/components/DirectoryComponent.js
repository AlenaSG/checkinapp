import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap'; 


class Directory extends Component {

    render(){
        const directory = this.props.groups.map(group => {
            return (
                <div key={group.id} className="col-md-5 m-1">
                    <Card onClick={() => this.props.onClick(group.id)}>  
                        <CardTitle><h2>{group.name}</h2></CardTitle>
                        <CardText>
                            <p className="small">{group.years}</p>
                            <p>{group.teacher}</p>
                            <p>{group.level}</p>
                        </CardText>
                    </Card>
                </div>
            );
        });


        return(
            <div className="container">
                <div className="row">
                    {directory}
                </div>
            </div>
        );
    }

}

export default Directory;