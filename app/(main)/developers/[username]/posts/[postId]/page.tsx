import React from 'react'

const Posts = async ({params}:{params:Promise<{id:string}>}) => {
    const { id } = await params;
  return (
    <div>Posts {id}</div>
  )
}

export default Posts