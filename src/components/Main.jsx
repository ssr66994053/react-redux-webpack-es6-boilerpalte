import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class Main extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/other">OtherPage</Link>
          </li>
        </ul>
        <div>
        { React.cloneElement(this.props.children, this.props) }
        </div>
      </div>
    )
  }
}

export default Main
