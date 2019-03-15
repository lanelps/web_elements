import React from 'react'

export default function Test4() {
  const box = []
  for (var i = 0; i < 36; i++) {
    box.push(<div key={i} className="six" />)
  }
  return (
    <React.Fragment>
      <div className="test6">{box}</div>
    </React.Fragment>
  )
}
