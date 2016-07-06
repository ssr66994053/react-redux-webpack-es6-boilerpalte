import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import rootActions from '../actions/index'
import Main from './Main.jsx'

function mapStateToProps(state) {
  return {
    counter: state.counter,
    users: state.users,
    messages: state.messages,
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(rootActions, dispatch)
}

const App = connect(mapStateToProps, mapDispachToProps)(Main)

export default App
