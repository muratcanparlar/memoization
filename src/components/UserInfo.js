import React, { memo } from 'react'

function UserInfo({data}) {
    console.log("userinfo was re-rendered");
  return (
    <div>
        <p>{data.username}</p>
        <p>{data.email}</p>
    </div>
  )
}

export default memo(UserInfo)