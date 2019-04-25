import React, { Component } from 'react'
import * as Waypoint from 'react-waypoint' 

class WhenInView extends Component {
    constructor(props){
        super(props)

        this.state = {
            isInView: true, 

        }
        this.onEnter = this.onEnter.bind(this)
    }

    onEnter({previousPosition}){
        if(previousPosition === Waypoint){
            this.setState({
            isInView: false
        })
    }
}

  render() {
      console.log(WhenInView)
    return (
      <div>
        {/* <Waypoint onEnter={this.onEnter}>{this.props.children({ isInView: this.state.isInView })}</Waypoint> */}
      </div>
    )
  }s
}

export default WhenInView