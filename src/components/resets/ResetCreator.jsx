import React from 'react'
import { res } from '../../context/counterSlice'
import { useDispatch } from 'react-redux'

import Button from 'react-bootstrap/Button';

function ResetCreator() {
    let dispatch = useDispatch()
  return (
    <div>
        
        <Button variant="success" onClick={() => dispatch(res())}>reset</Button>
    </div>
  )
}

export default ResetCreator