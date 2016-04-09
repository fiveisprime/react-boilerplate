import React, {createClass} from 'react'

import DefaultLayout from '../layouts/Default'

let Home = createClass({
  render() {
    return (
      <DefaultLayout classes="home">
        <p>This is the home page!</p>
      </DefaultLayout>
    )
  }
})

export default Home
