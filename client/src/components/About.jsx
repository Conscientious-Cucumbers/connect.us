import React from 'react';
import Paper from 'material-ui/Paper';


const About = () => (
  <Paper zDepth={5}
    className="about-entry">
    <div className="about-entry-content">
      <h1 className="about-this-page">About</h1>
      <p className="about-page-description">ConnectHub.us is a social networking website in which users can post pictures, news, and statuses for their friends and other users to see. Users can also scroll through their news feed to view the most up-to-date news from 20+ news outlets around the world.</p>
      <div className="about-page-content">
        <span className="about-collaborators">Collaborators:</span>
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
