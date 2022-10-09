import React from 'react'

function Header({number}) {
    console.log("Header was re-rendered")
  return (
   
    <div>Header - {number}</div>
  )
}

export default React.memo(Header)