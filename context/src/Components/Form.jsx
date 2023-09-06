import React, { useRef } from 'react'

function Form({forcreate, forupdate, defaulttask}) {

    const task = useRef(null)

    const onsubmit = (e) =>{
      e.preventDefault()
      const todo = {
        task : task.current.value,
        id : Math.floor(Math.floor() * 1000000000000)
      }
      if(forcreate) forcreate(todo)
      if(forupdate) forupdate(todo)
      
      task.current.value = ""
    }

  return (
    <form onSubmit={(e) => onsubmit(e)}>
        <input 
        type="text"
        ref={task}
        placeholder='Enter Task'
        defaultValue={defaulttask}
         />
    </form>
  )
}

export default Form