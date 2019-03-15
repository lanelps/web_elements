import React from 'react'

const Test1 = () => {
  const box = []
  for (var i = 0; i < 6; i++) {
    box.push(<div key={i} className="box" />)
  }
  return (
    <React.Fragment>
      <div className="test1">{box}</div>
    </React.Fragment>
  )
}

export default Test1
