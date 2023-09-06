import React from 'react'
import Form from '../Components/Form'
import useRequest from '../Hooks/useRequest'
import { useNavigate } from "react-router-dom"
import { useThemeContext } from '../Content/themeContext'

function CreatePage() {
  const navigate = useNavigate()
  const{loading, sendrequest} = useRequest({url : "/api/v1/todos", method : "POST"})
  const {value} = useThemeContext()

  const createtodo = (task) => {
    sendrequest([task]).then(() => navigate('/'))
  }
  return (
    <div className='Create_Page' id={value ? "darkcreatepage" : ""}>
        <div className="form">
          <h1>Create Todo</h1>
          <Form forcreate={createtodo}/>
        </div>
    </div>
  )
}

export default CreatePage