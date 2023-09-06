import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useThemeContext } from '../Content/themeContext'

function Header() {
  const navigate = useNavigate()
  const {value, changetheme} = useThemeContext()

  

  
  return (
    <div className='header' id={value ? "darkheader" : ""}>
        <div className="logo">
          <h1 onClick={() => navigate('/')}>Todo.API</h1>
        </div>
        <div className="links">
          <Link id='link' to={'/create'}>create</Link>
          <Link id='link' to={'/'}>Todos</Link>
        </div>
        <div className="language" >
          <button id={value ? "darktog" : ""} onClick={() => changetheme()}>
            <div className="theme" id={value ? "darkmodetoggle" : ""}></div>
          </button>
        </div>
    </div>
  )
}

export default Header