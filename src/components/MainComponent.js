import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './DirectoryComponent';
import GroupInfo from './GroupInfoComponent';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Footer from './FooterComponent';
import About from './AboutComponent';
import Welcome from './WelcomeComponent';
import Contact from './ContactComponent';
import { GROUPS } from '../shared/groups';
import { STUDENTS } from '../shared/students';
import { PARENTS } from '../shared/parents';

import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      groups: GROUPS,
      students: STUDENTS,
      parents: PARENTS
    };
  }


  render() {

    const HomePage =() => {
        return(
            <Home 
                student={this.state.students.filter(student => student.checkedIn)[0]}
            />
        );
    }

    const GroupWithId = ({match}) => {
        return (
            <GroupInfo 
                    group={this.state.groups.filter(group => group.id === +match.params.groupId)[0]}
                    students={this.state.students.filter(student => student.groupId === +match.params.groupId)}
                />
        );
    }

      return (
          <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/directory' render={() => <Directory groups={this.state.groups} />} />
                    <Route path='/directory/:groupId' component={GroupWithId} />
                    <Route exact path='/contact' component={Contact} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/welcome' component={Welcome} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
          </div>
      );
  }
}

export default Main;
