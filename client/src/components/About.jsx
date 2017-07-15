import React from 'react';
import { 
  Jumbotron,
  Button
} from 'react-bootstrap';


const About = () => (
  <div className="container">
    <Jumbotron className="jumbotron">
      <h1>About this App</h1>
      <p>Description for the app goes here</p>
      <p><small>
      Collaborators:
      <ul>
        <li>Taras Ignashchenko</li>
        <li>Saikal Emil</li>
        <li>Jake Gober</li>
        <li>Pablo Boserman</li>
      </ul>
      </small></p>
    </Jumbotron>
  </div>
);

export default About;