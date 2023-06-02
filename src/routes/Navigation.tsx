import logo from '../logo.svg';
// import {LazyPage1, LazyPage2, LazyPage3} from "../01-lazyload/pages";
import {} from "../01-lazyload/pages";
import {BrowserRouter, Navigate, NavLink, Route, Routes} from 'react-router-dom';
import {lazy, Suspense} from "react";

export const Navigation = () => {
  const LazyLayout = lazy(() =>  import(/* webpackChunkName: "LazyPage1" */ "./../01-lazyload/layout/LazyLayout"))
  const noLazy = lazy(() => import(/* webpackChunkName: "LazyPage2" */ "./../01-lazyload/pages/NoLazy"))

  const routes = [
    {to: "/lazyload/", path: "/lazyload/*", name: "Lazy Layout", Component: LazyLayout},
    {to: "/lazy2", path: "lazy2", name: "No Lazy", Component: noLazy}
  ]
  return (
      <Suspense fallback={<>Loadding...</>} >
        <BrowserRouter>
          <div className="main-layout">
            <nav>
              <img src={ logo } alt="React Logo" />
              <ul>
                {
                  routes.map(({to, name})=>(
                      <li key={to}>
                        <NavLink to={to} className={({isActive}) => isActive ? "nav-active" : ""}>{name}</NavLink>
                      </li>
                  ))
                }
              </ul>
            </nav>

            <Routes>
              {
                routes.map(({path, Component})=>(
                    <Route key={path} path={path} element={ <Component /> }/>
                ))
              }
              <Route path={"/*"} element={<Navigate to={routes[0].to} replace /> }/>
            </Routes>

          </div>
        </BrowserRouter>
      </Suspense>
  );
}