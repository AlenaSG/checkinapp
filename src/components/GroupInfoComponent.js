import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } 
from 'reactstrap';
import { Link } from 'react-router-dom';


    function RenderSelectedGroup({group}){
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

   function RenderStudents({students, group}){
        if(students){
            return(
                <div className="col-md-5 m-1">
                    <Card>
                        <h3>{group.name} Students</h3>
                        {students.map(student => <div key={student.id}><p>{student.firstname} {student.lastname}</p></div> )}

                        {/* {students.map(student => <p key={student}>{student}</p>)} */}
                        {/* {comments.map(comment => <div key={comment.id}>{comment.text} <p>--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p> </div> )} */}

                    </Card>
                </div>
            );
        }
        return <div />
    }

    function GroupInfo(props){
        if (props.group) {
            return(
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Breadcrumb>
                                <BreadcrumbItem><Link to="/Directory">Directory</Link></BreadcrumbItem>
                                <BreadcrumbItem active>{props.group.name}</BreadcrumbItem>
                            </Breadcrumb>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <RenderSelectedGroup group={props.group} />
                        <RenderStudents students={props.students} group={props.group} />
                    </div>
                </div>
            );
        }
        return <div />
    }

export default GroupInfo;