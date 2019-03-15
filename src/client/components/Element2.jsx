import React from 'react'

export default function Test2() {
  const box = []
  for (var i = 0; i < 6; i++) {
    box.push(<div key={i} className="box" />)
  }
  return (
    <React.Fragment>
      <div className="test2">{box}</div>
    </React.Fragment>
  )
}
