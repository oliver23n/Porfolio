
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {About, Projects, Contact} from './components'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/Projects',
        element: <Projects />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
