
import React, { Component } from 'react'
import NavBar from './components/NavBar.js'
import News from './components/News.js'
import LoadingBar from 'react-top-loading-bar'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
apiKEy='pub_9628988648c41baa85577f0d420f3461ca56'
  state ={
    progress:0


  }
  setProgress=(progress)=>
  {
    this.setState({
      progress:progress
    })
  }
  render() {
    return (
      <Router>

        
        <NavBar/>
        <LoadingBar
        color='#f11946' height={5}
        progress={this.state.progress}
   
      />
        <Routes>

          <Route exact path="/" element={<News apiKey={this.apiKEy} setProgress={this.setProgress}  key="/"  element pageSize={10} title='Latest HeadLines ' category='top'/>} />         
          <Route exact path="/business" element={<News apiKey={this.apiKEy} setProgress={this.setProgress} key="business"  pageSize={10} title='business HeadLines ' category='business'/>} /> 
          <Route exact path="/environment" element={<News apiKey={this.apiKEy} setProgress={this.setProgress} key="environment"  pageSize={10} title='environment HeadLines ' category='environment'/>} /> 
          <Route exact path="/entertainment" element={<News apiKey={this.apiKEy} setProgress={this.setProgress} key="entertainment"  pageSize={10} title='entertainment HeadLines ' category='entertainment'/>} /> 
          <Route exact path="/health" element={<News apiKey={this.apiKEy} setProgress={this.setProgress} key="health"  pageSize={10} title='health HeadLines ' category='health'/>} /> 
          <Route exact path="/food" element={<News apiKey={this.apiKEy} setProgress={this.setProgress} key="food"  pageSize={10} title='food HeadLines ' category='food'/>} /> 
          <Route exact path="/science" element={<News apiKey={this.apiKEy} setProgress={this.setProgress} key="science"  pageSize={10} title='science HeadLines ' category='science'/>} /> 
          <Route exact path="/politics" element={<News apiKey={this.apiKEy} setProgress={this.setProgress} key="politics"  pageSize={10} title='politics HeadLines ' category='politics'/>} /> 
          <Route exact path="/technology" element={<News apiKey={this.apiKEy} setProgress={this.setProgress} key="technology"  pageSize={10} title='technology HeadLines ' category='technology'/>} /> 
          <Route exact path="/sports" element={<News apiKey={this.apiKEy} setProgress={this.setProgress}  key="sports" pageSize={10} title='sports HeadLines ' category='sports'/>} /> 
          <Route exact path="/world" element={<News apiKey={this.apiKEy} setProgress={this.setProgress}  key="world" pageSize={10} title='world HeadLines ' category='world'/>} /> 
          <Route exact path="/top" element={<News apiKey={this.apiKEy} setProgress={this.setProgress}  key="top" pageSize={10} title='top HeadLines ' category='top'/>} /> 

        </Routes>
        
      </Router>
    )
  }
}


