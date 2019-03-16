import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #1</CardTitle>
            <CardText>
              This is my ToDo App Created in React. Source code in Github
             </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/raamir/raamir.github.io/tree/master/projects/react">GitHub </a></Button>
              <br/>     
        <Button colored><a href="https://raamir.github.io/projects/react">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          
        </div>
      )
    } else if(this.state.activeTab === 1) {
      return (
         <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Ruby_on_Rails_logo.svg/2000px-Ruby_on_Rails_logo.svg.png) center / cover'}} >React Project #1</CardTitle>
            <CardText>
              This is my E-Commerce Website Created in Ruby On Rails Project. Source code in Github.
             </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/raamir/depotapp">GitHub </a></Button>
              <br/>     
        <Button colored><a href="http://tranquil-peak-83050.herokuapp.com/">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          
        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/sco/thumb/9/9e/JQuery_logo.svg/1024px-JQuery_logo.svg.png) center / cover'}} >React Project #1</CardTitle>
            <CardText>
              This is my PWA Disney Quiz Created in JQuery.
             </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/raamir/raamir.github.io/tree/master/projects/quizpwa">GitHub </a></Button>
              <br/>     
        <Button colored><a href="https://raamir.github.io/projects/quizpwa/home.html">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          
        </div>
      )
    }
  }
  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Ruby On Rails</Tab>
          <Tab>JQuery</Tab>
        </Tabs>
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
      </div>
    )
  }
}
export default Projects;