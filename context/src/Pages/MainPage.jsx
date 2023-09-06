import React, { useState, useEffect } from 'react';
import { useUserContext } from '../Content/userContext';
import { Link } from 'react-router-dom';
import useRequest from '../Hooks/useRequest';
import { useThemeContext } from '../Content/themeContext';

function MainPage() {
  const { taskdelete, updateloading, dataloading, tasks } = useUserContext();
  const [showLoading, setShowLoading] = useState(true);
  const {value} = useThemeContext()
  


  useEffect(() => {

    const loadingTimer = setTimeout(() => {
      setShowLoading(false);
    }, 800);

    return () => {
      clearTimeout(loadingTimer);
    };
  }, []);



  return (
    <>
      {showLoading || updateloading || dataloading ? (
        <div className="loading_page" id={value ? "darkloadingpage" : ""}>
          <div className="spinner"></div>
          <h4>loading...</h4>
        </div>
      ) : (
        <div className='Mainpage' id={value ? "darkpage" : ""}>
          {tasks.length === 0 ? (
            <div className="isnotcreated">
              <div className="isnotcreated_window" id={value ? "darkwindow" : ""}>
                <h2>There is No tasks</h2>
                <Link id='alert_link' to={'/create'}>Create some</Link>
              </div>
            </div>
          ) : (
            <>
              <h1 id='headline'>Todos:</h1>
              <div className="todo_list">
                {tasks.map((item) => (
                  <div id={value ? "darktodo" : ""} className="todo" key={item.id}>
                    <h1>{item.task}</h1>
                    <div className="buttons">
                      <button onClick={() => taskdelete(item.id)}>Delete</button>
                      <Link id='todo_link' to={`/edit/${item.id}`}>Edit</Link>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default MainPage;