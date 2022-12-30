import React from 'react'
import { useToggle } from '../Hooks/useToggle'

function Toggleing() {


    const [ isShow , toggle ] = useToggle();

  return (
    <div>

    <button onClick={ toggle }>
        {
            isShow? "Hide" : "Show"
        }
      </button>
       { isShow && <h1>zakaria is show</h1> } 
    </div>
  )
}

export default Toggleing