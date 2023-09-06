import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Form from '../Components/Form'
import { useUserContext } from '../Content/userContext'
import useFetch from '../Hooks/useFetch'
import useRequest from '../Hooks/useRequest'
import { useThemeContext } from '../Content/themeContext'


function EditPage() {
  const navigate = useNavigate()
  const {id} = useParams()
  const {data} = useFetch({url: `/api/v1/todos/${id}`, method: "GET"})
  const {sendrequest} = useRequest({ method: 'PUT'})
  const {value} = useThemeContext()


  const updatetodo = (value) => {
    sendrequest(value, `/api/v1/todos/${id}` ).then(() => navigate('/'))
  }
  return (
    <div className='Create_Page' id={value ? "darkcreatepage" : ""}>
        <div className="form">
          <h1>Update Todo</h1>
          <Form forupdate={updatetodo} defaulttask={data?.task} />
        </div>
    </div>
  )
}

export default EditPage