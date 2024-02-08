import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import { Provider } from "react-redux";
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children: [
    {
      path: "/",
      element: <MainContainer />
    },
    {
      path: "watch",
      element: <WatchPage />
    }
  ]
}]);

function App() {
  return (
    <Provider store={store}>
    <div>
      <Head />
      <RouterProvider router={appRouter} />

      {/**
       * 
       * Head
       * Body
       * SideBar
       *  MenuItems
       * MainContainer
       *    ButtonList
       *    VideoComtainer
       *      VideoCard
       * 
       * 
      */}
    </div>
    </Provider>
  );
}

export default App;
