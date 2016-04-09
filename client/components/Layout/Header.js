import React, {createClass} from 'react'
import {Link} from 'react-router'

let Header = createClass({
  render() {
    return (
      <header>
        <h1><Link to="/">React Boilerplate</Link></h1>
      </header>
    )
  }
})

export default Header
