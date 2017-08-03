import React from 'react';
import Paper from 'material-ui/Paper';


const About = () => (
  <Paper zDepth={5}
    className="about-entry">
    <div className="about-entry-content">
      <h1 className="about-this-page">About</h1>
      <p className="about-page-description">Description for the app goes here</p>
      <div className="about-page-content">
        Collaborators:
        <ul>
          <li>Taras Ignashchenko</li>
          <li>Saikal Kalmanbetova</li>
          <li>Jake Gober</li>
          <li>Pablo Boserman</li>
        </ul>
      </div>
    </div>
  </Paper>
);

export default About;
