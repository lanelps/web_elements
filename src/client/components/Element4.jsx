import React from 'react'

export default function Test4() {
  const box = []
  for (var i = 0; i < 4; i++) {
    box.push(<div key={i} className="four" />)
  }
  return (
    <React.Fragment>
      <div className="test4">{box}</div>
    </React.Fragment>
  )
}
