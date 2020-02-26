import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderDirectoryItem({group}){
    return(
        <Card>  
            <Link to={`/directory/${group.id}`}>
             <CardTitle><h2>{group.name}</h2></CardTitle>
             <CardText>
                <p className="small">{group.years}</p>
                <p>{group.teacher}</p>
                <p>{group.level}</p>
            </CardText>
            </Link>
        </Card>
    );
}

function Directory(props) {

    const directory = props.groups.map(group => {
        return (
            <div key={group.id} className="col-md-5 m-1">
                <RenderDirectoryItem group={group} />  
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


export default Directory;