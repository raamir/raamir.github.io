import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Home extends Component{
  render() {
    return(
    <div style={{width: '95%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://image.flaticon.com/icons/png/512/219/219969.png"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Web Developer</h1>

            <hr/>

          <p>HTML/CSS | Bootstrap | JavaScript | React | Java | NodeJS | AngularJS | jQuery</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="http://linkedin.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="http://github.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Freecodecamp */}
          <a href="http://freecodecamp.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-free-code-camp" aria-hidden="true" />
          </a>

          {/* Youtube */}
          <a href="http://youtube.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-youtube-square" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Home;