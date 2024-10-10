import './App.css';
import { publicRoutes } from './routes'
import { privateRoutes } from './routes'

import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page />} />
          })}
          {privateRoutes.map((route2, index2) => {
            const Page = route2.component;
            return <Route key={index2} path={route2.path} element={<Page />} />
          })}



        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;