import React from 'react'

function CustomRemoveBtn({ children, eventKey, onClick }) {
  return (
    <div className='btn btn-primary'>{children}</div>
  )
}

export default CustomRemoveBtn