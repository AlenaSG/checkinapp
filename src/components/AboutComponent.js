import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
// import { Link } from 'react-router-dom';


// function About(props) {

//     const partners = props.partners.map(partner => {
//         return (
//             <h5>{partner.name}</h5>
//         );
//     });

//     return (
//         <div className="container">
//             <div className="row">
//                 <div className="col">
//                     <Breadcrumb>
//                         <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
//                         <BreadcrumbItem active>About Us</BreadcrumbItem>
//                     </Breadcrumb>
//                     <h2>About Us</h2>
//                     <hr />
//                 </div>
//             </div>
//             <div className="row row-content">
//                 <div className="col-sm-6">
//                     <h3>Our Mission</h3>
//                     <p>We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness. We increase access to adventure for the public while promoting safe and respectful use of resources. The expert wilderness trekkers on our staff personally verify each campsite to make sure that they are up to our standards. We also present a platform for campers to share reviews on campsites they have visited with each other.</p>
//                 </div>
//                 <div className="col-sm-6">
//                     <Card>
//                         <CardHeader className="bg-primary text-white"><h3>Facts At a Glance</h3></CardHeader>
//                         <CardBody>
//                             <dl className="row">
//                                 <dt className="col-6">Founded</dt>
//                                 <dd className="col-6">February 3, 2016</dd>
//                                 <dt className="col-6">No. of Campsites in 2019</dt>
//                                 <dd className="col-6">563</dd>
//                                 <dt className="col-6">No. of Reviews in 2019</dt>
//                                 <dd className="col-6">4388</dd>
//                                 <dt className="col-6">Employees</dt>
//                                 <dd className="col-6">42</dd>
//                             </dl>
//                         </CardBody>
//                     </Card>
//                 </div>
//                 <div className="col">
//                     <Card className="bg-light mt-3">
//                         <CardBody>
//                             <blockquote className="blockquote">
//                                 <p className="mb-0">I will not follow where the path may lead, but I will go where there is no path, and I will leave a trail.</p>
//                                 <footer className="blockquote-footer">Muriel Strode,{' '}
//                                     <cite title="Source Title">"Wind-Wafted Wild Flowers" -
//                                     The Open Court, 1903</cite>
//                                 </footer>
//                             </blockquote>
//                         </CardBody>
//                     </Card>
//                 </div>
//             </div>
//             <div className="row row-content">
//                 <div className="col-12">
//                     <h3>Community Partners</h3>
//                 </div>
//                 <div className="col mt-4">
//                     <Media list>
//                         {partners}
//                     </Media>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default About;

function About(props){

    return (
        <div className="container">
            <h1>Director's Welcome</h1>
                Welcome to Northern Lights Montessori School! At Northern Lights Montessori, we consider it an honor to play a key role in your child’s growth into a responsible, compassionate, respectful, curious, and well rounded individual. We have a staff of talented teachers and assistants who enjoy working with children.

                We would love the opportunity to work with you in helping your child’s mind bloom during the time when it’s most absorbent. We strive to exceed your expectations in all aspects of your child’s early learning experience. Please don’t hesitate to call us or send us an e-mail to find out more about our school. Also, feel free to give us a call to schedule a tour of our facility. We look forward to meeting you and your child.

                Sincerely,
                Florence Plantilla
        </div>
    );
}

export default About;