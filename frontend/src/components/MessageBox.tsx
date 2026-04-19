import React from 'react'
import { Alert } from 'react-bootstrap'

const MessageBox = ({variant = "info", children}: {variant?: string, children: React.ReactNode}) => {
  return (
    <Alert variant={variant || "info"} className="my-3">
      {children}
    </Alert>
  )
}

export default MessageBox