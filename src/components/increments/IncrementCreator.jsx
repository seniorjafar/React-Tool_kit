import React, { useState }  from 'react'
import { inc } from '../../context/counterSlice'
import { useDispatch } from 'react-redux'
import Button from 'react-bootstrap/Button';

function IncrementCreator() {
    let dispatch = useDispatch()
    const [inputValue, setInputValue] = useState('');
  return (
    <div>
        
        <div className='input-group mb-3'>
          <input type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <div className='d-flex justify-content-center'>
          <Button variant="primary" onClick={() => dispatch(inc(parseInt(inputValue)))}>increment</Button>
        </div>
    </div>
  )
}

export default IncrementCreator