import React from 'react'

function EditarProductoView({ p }) {
  return (
    <div>
        <h1>{p.name}</h1>
        <h2>{p.description}</h2>
    </div>
  )
}

export default EditarProductoView