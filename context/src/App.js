import logo from './logo.svg';
import './App.css';
import 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import routes from './Routes/Route';

function App() {
  return <RouterProvider router={createBrowserRouter(routes)}/>
}

export default App;
