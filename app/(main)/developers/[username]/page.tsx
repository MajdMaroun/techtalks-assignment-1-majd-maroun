import React from 'react'

const Profile = async ({params}:{params:Promise<{username:string}>}) => {
    const { username } = await params;
  return (
    <div>Profile Information: {username}</div>
  )
}

export default Profile