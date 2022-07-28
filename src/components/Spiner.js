import React, { Component } from 'react'
import imgPath from '../images/loading.gif' 
import '../css/style.css'
export default class Spiner extends Component {
  render() {
    return (
      <div>
          <div className="loading-cont">
                <img src={imgPath} alt="" />
            </div>
      </div>
    )
  }
}
