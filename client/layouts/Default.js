import React, {Component, PropTypes} from 'react'

import Header from '../components/Layout/Header'

export default class DefaultLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className={`contents ${this.props.classes}`}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

DefaultLayout.displayName = 'DefaultLayout'
