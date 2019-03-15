import React from 'react'

export default function Test3() {
  const box = []
  for (var i = 0; i < 6; i++) {
    box.push(<div key={i} className="box" />)
  }
  return (
    <React.Fragment>
      <div className="test3">{box}</div>
    </React.Fragment>
  )
}
