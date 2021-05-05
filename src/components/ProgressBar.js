import React, { useState } from 'react'
import PropTypes from 'prop-types'
import '../style/ProgressBar.css'

const ProgressBar = ({ children }) => {
  return (
    <div className="progress-bar" >
      {children}
    </div>
  )
}

const ProgressMeter = ({ value = 0, color }) => {
  const newValue = !isNaN(value) ? value * 100 : 0
  const percent = Math.round(newValue)
  const width = (newValue > 100 ? 100 : newValue) + '%'

  return (
    <div className='progress-meter' style={{ backgroundColor: color, width }}>{percent}%</div>
  )
}

ProgressMeter.propTypes = {
  value: PropTypes.number,
  color: PropTypes.string
}

ProgressBar.propTypes = {
  children: PropTypes.element
}

export { ProgressBar, ProgressMeter }