import React from 'react'
import { useState } from 'react'
import "./Dialog.css"
function Dialog() {

  const [show, setShow] = useState(false)

  return (
    <div>

      {!show && 
        <button onClick={() => setShow(true)}>Open Dialog Box</button>
      }

      {show && 
        <div className='sec_container'>
          <h3>Congrats !!</h3>
          <h3>You have opened a Dialog Box</h3>
          <button onClick={() => setShow(false)}>Close</button>
        </div>
      }

    </div>
  )
}

export default Dialog
