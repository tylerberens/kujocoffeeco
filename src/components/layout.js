import React from 'react'
import './base.css'
import Container from './container'
import Navigation from './navigation'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
        <>
        <div>
            {/* <Navigation /> */}
            {children}
        </div>
        </>
    )
  }
}

export default Template
