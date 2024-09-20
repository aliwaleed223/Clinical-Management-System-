import React from 'react'
import './AddUser.css'
// import DropdownHeader from '../../components/DropdownHeader/DropdownHeader'

function AddUser()  {
  return (
    <div className="Adduserbackground">
      <div className='container'>
      <form action='' >
        <h1>ADD USER</h1>
        <div className="input-box">
          <input type="text" placeholder='Enter Username'/>
        </div>
        <div className="input-box">
          <input type="password" placeholder='Enter Password' />
        </div>
        <div className="input-box">
          <input type="text" placeholder='Enter Phone Number' />
        </div>
        {/* <DropdownHeader /> */}
        <div className="submit-box">
          <button type='submit'>ADD</button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default AddUser