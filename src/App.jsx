import React from 'react'
import css from './style.scss'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      display: 0
    }
  }
  render() {
    return (
      <div>
        <div className="header">
          <h1>Boiling plate</h1>
        </div>
        <div id="boiling-icon"></div>
      </div>
    )
  }
}
