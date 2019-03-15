import React from 'react'

export default function Test4() {
  const box = []
  for (var i = 0; i < 11; i++) {
    box.push(<div key={i} className="five" />)
  }
  return (
    <React.Fragment>
      <div className="test5">{box}</div>
    </React.Fragment>
  )
}
