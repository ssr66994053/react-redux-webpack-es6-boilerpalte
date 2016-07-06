import React, { Component, PropTypes } from 'react'

class Welcome extends Component {
  handleClick(e) {
    e.preventDefault()
    let num = this.refs.num.value.trim()
    if (num != '') {
      this.props.addCount(parseInt(num))
    }
  }
  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <div><b><span>num:</span>{this.props.counter.num}</b></div>
        <input ref="num" type="text" placeholder="input add num here..."/>
        <input type="button" value="add" onClick={this.handleClick.bind(this)}/>
      </div>
    )
  }
}

export default Welcome
