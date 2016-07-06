import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'

import App from './components/App.jsx'
import Welcome from './components/Welcome.jsx'
import OtherPage from './components/OtherPage.jsx'

import { store, history } from './store'

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Router path="/" component={App}>
        <IndexRoute component={Welcome}/>
        <Route path="/other" component={OtherPage}/>
      </Router>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'))
