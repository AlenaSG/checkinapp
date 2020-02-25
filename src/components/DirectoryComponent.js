import React, { Component } from 'react';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groups: [
                {
                    id: 0,
                    name: 'Panderosa',
                    level: '1st Grade',
                    teacher: 'Ms Manolita',
                    assistant: 'Ms Anna B',
                    students: ['Alice Arkharov', 'Shesen Abdu', 'Tanvi Sandip', 'Ivan Popov', 'Daniel Zhukov', 'Anish Anu'],
                    full: false
                },
                {
                    id: 1,
                    name: 'Cottonwood',
                    level: 'Kindergarten',
                    teacher: 'Ms Green',
                    assistant: 'Ms Anna B',
                    students: ['Alice Arkharov', 'Shesen Abdu', 'Tanvi Sandip', 'Ivan Popov', 'Daniel Zhukov', 'Anish Anu'],
                    full: false
                },
                {
                    id: 2,
                    name: 'Willow',
                    level: 'Transition-K',
                    teacher: 'Ms Manolita',
                    assistant: 'Ms Anna B',
                    students: ['Alice Arkharov', 'Shesen Abdu', 'Tanvi Sandip', 'Ivan Popov', 'Daniel Zhukov', 'Anish Anu'],
                    full: false
                },
                {
                    id: 3,
                    name: 'Panderosa',
                    level: 'Pre-K',
                    teacher: 'Ms Milana',
                    assistant: 'Ms Anna B',
                    students: ['Alice Arkharov', 'Shesen Abdu', 'Tanvi Sandip', 'Ivan Popov', 'Daniel Zhukov', 'Anish Anu'],
                    full: false
                }
            ]
        };
    }

    render(){
        const directory = this.state.groups.map(group => {
            return (
                <div key={group.id} className="col">
                    <h2>{group.name}</h2>
                    <p>{group.teacher}</p>
                    <p>{group.level}</p>
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