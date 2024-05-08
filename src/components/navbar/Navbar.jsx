import React from 'react'
import { useSelector } from 'react-redux'
import person from '../../../public/person.svg';
function Navbar() {
    const count = useSelector(state => state.counter.value);
    console.log(count);
    return (
        <div className='text-center'>
            <div className='w-75'>
              <img width={100} src={person} alt="logo" />
            </div>
            <h2 className='fs-1'>{count}</h2>
        </div>
    );
}

export default Navbar;