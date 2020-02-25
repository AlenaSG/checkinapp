import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap'; 

class GroupInfo extends Component{
    constructor(props){
        super(props);
    }

    renderSelectedGroup(group){
        return(
            <div className="col-md-5 m-1">
                <Card>
                <CardTitle><h2>{group.name}</h2></CardTitle>
                <CardText>
                    <p className="small">{group.years}</p>
                    <p>{group.teacher}</p>
                    <p>{group.level}</p>
                    <p>Full {group.full ? false: ": no"}</p>
                </CardText>
                </Card>
            </div>
        );
    }

    renderStudents(students, group){
        if(students){
            return(
                <div className="col-md-5 m-1">
                    <Card>
                        <h4>{group.name} Students</h4>
                        {students.map(student => <p key={student}>{student}</p>)}
                        {/* {comments.map(comment => <div key={comment.id}>{comment.text} <p>--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p> </div> )} */}

                    </Card>
                </div>
            );
        }
        return(
            <div />
        );
    }
    render(){
        if (this.props.group) {
            return(
                <div className="container">
                    <div className="row mt-5">
                        {this.renderSelectedGroup(this.props.group)}
                        {this.renderStudents(this.props.group.students, this.props.group)}
                    </div>
                </div>
            );
        }
        return (
            <div />
        );
    }
}

export default GroupInfo;