
import React, { Component } from 'react'
import NavBar from './components/NavBar.js'
import News from './components/News.js'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>

        
        <NavBar/>
        <Routes>

          <Route exact path="/" element={<News  key="/"  element pageSize={10} title='Latest HeadLines ' category='top'/>} />         
          <Route exact path="/business" element={<News key="business"  pageSize={10} title='business HeadLines ' category='business'/>} /> 
          <Route exact path="/environment" element={<News key="environment"  pageSize={10} title='environment HeadLines ' category='environment'/>} /> 
          <Route exact path="/entertainment" element={<News key="entertainment"  pageSize={10} title='entertainment HeadLines ' category='entertainment'/>} /> 
          <Route exact path="/health" element={<News key="health"  pageSize={10} title='health HeadLines ' category='health'/>} /> 
          <Route exact path="/food" element={<News key="food"  pageSize={10} title='food HeadLines ' category='food'/>} /> 
          <Route exact path="/science" element={<News key="science"  pageSize={10} title='science HeadLines ' category='science'/>} /> 
          <Route exact path="/politics" element={<News key="politics"  pageSize={10} title='politics HeadLines ' category='politics'/>} /> 
          <Route exact path="/technology" element={<News key="technology"  pageSize={10} title='technology HeadLines ' category='technology'/>} /> 
          <Route exact path="/sports" element={<News  key="sports" pageSize={10} title='sports HeadLines ' category='sports'/>} /> 
          <Route exact path="/world" element={<News  key="world" pageSize={10} title='world HeadLines ' category='world'/>} /> 
          <Route exact path="/top" element={<News  key="top" pageSize={10} title='top HeadLines ' category='top'/>} /> 

        </Routes>
        
      </Router>
    )
  }
}


