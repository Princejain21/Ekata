import React from 'react'

export default function Alert(props) {
  return (
    <div className={`alert alert-${props.type}`}><p className='text-capitalize'>{props.message}</p></div>
  )
}
