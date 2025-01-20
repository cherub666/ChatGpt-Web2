import { useRoutes } from 'react-router-dom'
import { webRouter, adminRouter } from '../routers'
import { useMemo } from 'react'
import { userStore } from '@/store'

function App() {
  const { user_info } = userStore()

  const routers: Array<any> = useMemo(() => {
    let routerList = [...webRouter]
    if (user_info?.role === 'administrator') {
      routerList = [...routerList, ...adminRouter]
    }
    return routerList
  }, [user_info])

  const routesElement = useRoutes([...routers])
  return routesElement
}

export default App


// import { Layout } from 'antd';
// import React from 'react';
// import '@styles/index.scss';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Router from './router/index';
// const router = createBrowserRouter(Router);
// const searchParams = new URLSearchParams(location.search);
// const ticket = searchParams.get('ticket');
// if (ticket) {
//   localStorage.setItem('ticket', ticket);
//   location.replace(`${location.origin}${location.pathname}`);
// }

// const App = () => (
//     <Layout>
//       <Layout>
//         <RouterProvider router={router} />
//       </Layout>
//     </Layout>
// );
// export default App;

